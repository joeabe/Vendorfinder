const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId //to check if ID is present

const Authentication = require('../Middleware/authetication')
const Company = require('../Schema/Company');


/*********************************************************GET************************************************************/

router.get('/', Authentication, (req, res) => {
    req.userData;
    console.log(req.userData.SignInUser.email);
    Company
        .find({
        })
        .exec()
        .then((posts) => {
            // console.log('Data: ', posts);
            res.json(posts.filter(post => post.email === req.userData.SignInUser.email));
        })
        .catch((error) => {
            console.log('error', error);
        })
});


/*********************************************************GET ONE************************************************************/

router.route('/:id').
    get((req, res) => {
        Company
            .findById(req.params.id)
            .then((info) => {
                // console.log('Data: ', info);
                res.json(info);
            })
            .catch((error) => {
                console.log('error', error);
            })
    });


/*********************************************************POST************************************************************/
router.post('/', (req, res, next) => {
    const company = new Company({
        _id: new mongoose.Types.ObjectId,
        businessName: req.body.businessName,
        businessType: req.body.businessType,
        businessDescription: req.body.businessDescription,
        contactNumber: req.body.contactNumber,
        contactAddress: req.body.contactAddress,
        cityAddress: req.body.cityAddress,
        postalCode: req.body.postalCode,
        email: req.body.email
    });
    company
        .save()
        .then(result => {
            // console.log(result);
            res.status(201).json({
                message: 'Company created'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


/*********************************************************PUT************************************************************/
router.route('/:id')
    .put((req, res, next) => {
        Company
            .findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                    console.log('Information updated successfully!')
                }
            })
    })


/*********************************************************DELETE************************************************************/
router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)
    Company
        .findByIdAndRemove(req.params.id)
        .then(() => {
            console.log('Record Deleted promise');
            res.status(201).json({
                message: 'Record Deleted JSA'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})


module.exports = router