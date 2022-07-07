const TaskModel = require("../models/task");

/**
 * Get all tasks
 * TODO: Add pagination feature
 */
 exports.getAll = async (req, res, next) => {
    try {
      let username = req.params.username;
      let tasks = await TaskModel.find({username: username});
      res.send({
        count: tasks.length,
        tasks,
      });
    } catch (err) {
      next(err);
    }
  };

  /**
 * Get task by
 * TODO: Add pagination feature
 */
 exports.getTask = async (req, res, next) => {
    try {
      let id = req.params._id;
      let tasks = await TaskModel.findOne({ _id: id });
      if (!tasks) {
        return res.status(404).send({
          message: "task not found",
        });
      }
      res.send({ tasks });
    } catch (err) {
      next(err);
    }
  };
  
  exports.createTask = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { taskname, description, datetime, username } = req.body;
      let newTask = await TaskModel.create({ 
        taskname, 
        description,
        datetime,
        username, 
      });
      res.send({ newTask });
    } catch (err) {
      next(err);
    }
  };
  
  exports.updateTask = async (req, res, next) => {
    try {
      // TODO: Requiere validation
      // What task update?
      let idToUpdate = req.params.id;
      // New data
      let { taskname, description, datetime } = req.body;
      let task = await TaskModel.findOne({ id: idToUpdate });
      if(!task) return res.status(400).send({
        message: "Task to update not found"
      })
  
      task.taskname = taskname;
      task.description = description;
      task.datetime = datetime;
      let updatedTask = await task.save();
      
      if (task == updatedTask) {
        return res.send({
          message: "task is updated",
          task: updatedTask,
        });
      }
      res.send({
        message: "cannot update de task",
      });
    } catch (err) {
      next(err);
    }
  };
  
  exports.deleteTask = async (req, res, next) => {
    try {
      let id = req.params.id;
      let { deletedCount } = await TaskModel.deleteOne({ id });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "cannot delete the task, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
  };
