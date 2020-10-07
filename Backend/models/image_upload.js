const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	image1:
	{
		data: Buffer,
		contentType: String
	}
});

module.exports = new mongoose.model('Image', imageSchema)
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
 
app.set("view engine", "ejs")

const fs = require('fs'); 
const path = require('path'); 
const multer = require('multer'); 
  
const storage = multer.diskStorage({ 
    destination: (request, file, cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (request, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
const upload = multer({ storage: storage }); 

const imageModel = require('./model');
app.get('/', (request, response) => {
	imageModel.find({}, (error1, items) => {
		if (error){
			console.log(error1);
		}
		else{
			response.render('app', { items: items });
		}
	})
});

// Uploading the image 
app.post('/', upload.single('image'), (request, respond, next) => { 
  
    var obj = { 
        name: request.body.name, 
        desc: request.body.desc, 
        image1: { 
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + request.file.filename)), 
            contentType: 'image/png'
        } 
    } 
    imageModel.create(obj, (error1, item) => { 
        if (error1) { 
            console.log(error1); 
        } 
        else { 
            // item.save(); 
            response.redirect('/'); 
        } 
    }); 
}); 
