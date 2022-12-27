const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  taskHierarchy: {
    type: String,
    required: true
  },
  nameTask: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  taskId: {
    type: Number,
    required: true
  },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task