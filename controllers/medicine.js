const MedicineModel = require("../models/medicine");

/**
 * Get all tasks
 * TODO: Add pagination feature
 */
 exports.getAllMedicine = async (req, res, next) => {
    try {
      let username = req.params.username;
      let medicines = await MedicineModel.find({username: username});
      res.send({
        count: medicines.length,
        medicines,
      });
    } catch (err) {
      next(err);
    }
  };

  /**
 * Get task by
 * TODO: Add pagination feature
 */
 exports.getMedicine = async (req, res, next) => {
    try {
      let medicine = req.params.medicine;
      let medicines = await MedicineModel.findOne({ medicine: medicine});
      if (!medicines) {
        return res.status(404).send({
          message: "medicine not found",
        });
      }
      res.send({ medicines });
    } catch (err) {
      next(err);
    }
  };
  
  exports.createMedicine = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { medicine, doseQuantity, intervalDose, dateDoseActive, username } = req.body;
      let newMedicine = await MedicineModel.create({ 
        medicine, 
        doseQuantity,
        intervalDose,
        dateDoseActive, 
        username,
      });
      res.send({ newMedicine });
    } catch (err) {
      next(err);
    }
  };
  
  exports.updateMedicine = async (req, res, next) => {
    try {
      // TODO: Requiere validation
      // What task update?
      let idToUpdate = req.params.id;
      // New data
      let { medicine, doseQuantity, intervalDose, dateDoseActive } = req.body;
      let medicines = await MedicineModel.findOne({ id: idToUpdate });
      if(!medicines) return res.status(400).send({
        message: "Medicine to update not found"
      })
  
      medicines.medicine = medicine;
      medicines.doseQuantity = doseQuantity;
      medicines.intervalDose = intervalDose;
      medicines.dateDoseActive = dateDoseActive;
      let updatedMedicine = await medicines.save();
      
      if (medicines == updatedMedicine) {
        return res.send({
          message: "medicine is updated",
          medicines: updatedMedicine,
        });
      }
      res.send({
        message: "cannot update de medicine",
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.deleteMedicine = async (req, res, next) => {
    try {
      let id = req.params.id;
      let { deletedCount } = await MedicineModel.deleteOne({ id });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "cannot delete the medicine, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
  };
