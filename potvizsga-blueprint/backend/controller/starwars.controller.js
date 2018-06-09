const Starwars = require('../models/starwars');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {

  // list all data
  list: (req, res) => {
    Starwars.find({})
      .then(starwars => res.json(starwars))
      .catch(err => res.send(err));
  },
  // findOne
  find: (req, res) => {
    Starwars.findById(req.params.id)
      .then(starwars => res.json(starwars))
      .catch(err => res.send(err));
  },
  // create new data
  create: (req, res) => {
    Starwars.create(req.body, (err, post) => {
      if (err) {
        res.send(err);
      } else {
        res.json(post);
      }
    });
  },
  // update by id
  update: (req, res) => {
    console.log(req.body);
    Starwars.findByIdAndUpdate(req.params.id, req.body)
      .then(starwars => res.json(starwars))
      .catch(err => res.send(err));
  },
  // remove by id
  remove: (req, res) => {
    Starwars.findByIdAndRemove(req.params.id)
      .then(starwars => res.json(starwars))
      .catch(err => res.send(err));
  },
};