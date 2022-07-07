const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MedicineSchema = new Schema(
  {
   medicine: {
    type: String,
    required: true,
   },
   doseQuantity: {
    type: Number,
    required: true, 
   },
   intervalDose: {
    type: Number,
    required: true, 
   }, 
   dateDoseActive: {
    type: Date,
    required: true,
    default: Date.now, 
   },
   username: {
    type: String,
    required: true,
   }
  },
);

const MedicineModel = mongoose.model("medicine", MedicineSchema);
module.exports = MedicineModel;