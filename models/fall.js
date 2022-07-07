const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const polygonSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Polygon'],
      required: true
    },
    coordinates: {
      type: [[[Number]]],
      required: true,
    }
  }
)

const PolygonModel = mongoose.model("fall", PolygonModel);
module.exports = PolygonModel;