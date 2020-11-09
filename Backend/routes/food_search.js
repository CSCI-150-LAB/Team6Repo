const router = require('express').Router();
let Search = require('../models/search.model');

router.route('/').get((req, res) => {
  Search.find()
    .then(search => res.json(search))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const search = req.body.search;
 
  const newSearch = new Search({search,certified});


  // need to display results of search here. DONT ADD AND SAVE.
 // newSeller.save() 
  //  .then(() => res.json('Seller added!'))
  //  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;