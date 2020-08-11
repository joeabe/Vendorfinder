const express = require('express');
const router = express.Router();


const Company = require('../../Schema/Company');

/**************************** GetCompany Info *****************************/

router.get('/', (req,res) =>{
    Company
    .find({ businessType: 'Services'})
    .then((info)=>{console.log('Data: ', info);
    res.json(info);
})
.catch((error)=>{
    console.log('error', error);
})
});
module.exports = router;

