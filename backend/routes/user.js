// endpoint to perform CRUD operations
const router = require('express').Router();
let User = require('../models/user.model');

// get all orders
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add a new order
router.route('/add').post((req, res) => {
  const User_Name = req.body.User_Name;
  const Address = req.body.Address;
  const Allergy = req.body.Allergy;
  const Noise = req.body.Noise;
  const Lighting = req.body.Lighting;

  const newOrder = new User({
      User_Name,
      Address,
      Allergy,
      Noise,
      Lighting
  });

  newOrder.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;