const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  businessName: { type: String, required: true },
  businessType: { type: String, required: true },
  businessDescription: { type: String, required: true },
  contactNumber: { type: String, required: true },
  contactAddress: { type: String, required: true },
  cityAddress: { type: String, required: true },
  postalCode: { type: String, required: true },
  email: { type: String,  required: true}
 
});

module.exports = mongoose.model('Company', companySchema);

