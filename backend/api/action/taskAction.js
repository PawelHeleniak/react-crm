// const Project = require('../models/project');
const Task = require('../models/task');

class TaskAction {
  //adding new task to project
  async addTask(req, res) {
    // const task = await Task.find({});

    const { taskHierarchy, nameTask, description } = req.body

    const create = new Task({
      taskHierarchy: taskHierarchy,
      nameTask: nameTask,
      description: description,
      taskId: 1,
    })

    await create.save();
    res.status(201).json(create);
  }
}

module.exports = new TaskAction();