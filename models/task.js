const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TaskSchema = new Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    datetime: {
      type: Date,
      required: true,
      default: Date.now
    },
    username: {
      type: String,
      required: true,
    },
  },
);

const TaskModel = mongoose.model("task", TaskSchema);
module.exports = TaskModel;
