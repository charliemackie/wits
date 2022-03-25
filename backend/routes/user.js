// endpoint to perform CRUD operations
const router = require('express').Router();
let User = require('../models/user.model');

// get all users
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get specific user
router.route('/:id').get((req, res) => {
  User.findOne({ID: req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add a new user
router.route('/add').post((req, res) => {
  const ID = req.body.ID;
  const Snack = req.body.Snack;
  const Allergy = req.body.Allergy;
  const Noise = req.body.Noise;
  const Light = req.body.Light;

  const newOrder = new User({
      ID,
      Snack,
      Allergy,
      Noise,
      Light
  });

  newOrder.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;