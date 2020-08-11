const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require('../Schema/User');

router.post('/', (req, res, next) => {
  //  console.log(req.body);

  /************************Check if Email already exist*****************************/
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {      //means email exist
        return res.status(409).json({
          message: 'User already exist'
        });
      }
      /************************If doesnt exist, Make a password*****************************/
      else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: err
            });

          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash
            });

     /************************Save the user information**************************************/
            user
              .save()
              .then(result => {
                console.log(result);
                return res.status(200).json({
                  message: 'Auth successful'
                });
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(422).json({
        error: err
      })
    });
});

module.exports = router;
