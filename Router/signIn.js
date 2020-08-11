require('dotenv').config()

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../Schema/User');


router.post('/', (req, res, next) => {
/********************** Search for the User *********************/
  User
    .find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }

/********************** If Use User if found *********************/
      const SignInUser = {
        email: user[0].email,
        userId: user[0]._id
      };
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed'
          });
        }
        // console.log('TEST CASE EMAIL & ID', SignInUser);
        if (result) {
          const token = jwt.sign({
            SignInUser
          }, process.env.TOKEN_SECRET,
            {
              expiresIn: "1h" // or { expiresIn: 3600 }
            });
          //  console.log('TEST CASE TOKEN',token);
          return res.status(200).json({
            message: 'Auth successful',
            token: token,
            userId: SignInUser.userId
          });
        }
        res.status(401).json({
          message: 'Auth failed'
        });
      });
    })



    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;

