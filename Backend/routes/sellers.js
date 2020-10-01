const router = require('express').Router();
let Seller = require('../models/seller.model');

router.route('/').get((req, res) => {
  Seller.find()
    .then(seller => res.json(seller))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email= req.body.email;
  const name= req.body.name;
  const phone= req.body.phone;
  const address= req.body.address;
  const itemLinker= req.body.itemLinker;
  const ethnicity= req.body.ethnicity;
  const aboutMe= req.body.aboutMe;
  const certified= req.body.certified;

  const newSeller = new Seller({username,password,email,name,phone,address,itemLinker,ethnicity,
    aboutMe,certified});

  newSeller.save()
    .then(() => res.json('Seller added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;