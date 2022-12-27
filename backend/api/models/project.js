const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  information: {
    type: String,
    required: true
  },
  users: {
    type: Array,
    required: true
  },
  tasks: {},
  projectId: {
    type: Number,
    required: true
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project