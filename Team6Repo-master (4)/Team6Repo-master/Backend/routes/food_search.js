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


  {usersInfo: [{Search: <food></food>, db: <AuthenticChef></AuthenticChef>}]} 
  {usersInfo: [{Search: <discription></discription>, db: <AuthenticChef></AuthenticChef>}]}
  // returns the food and discription of the products searched. double check if there being put into the database as users or not. 
  // Also check if this works for multiple results or not.

});

module.exports = router;