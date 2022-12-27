const Project = require('../models/project');

class ProjectAction {
  //get all user data
  async getAllProjects(req, res) {
    const project = await Project.find({});
    res.status(200).json(project);
  }

  //adding new projects
  async saveProject(req, res) {
    const project = await Project.find({});
    const { title, information, users, tasks } = req.body

    // get max id
    const projectId = project.map(e => e.projectId);
    let maxId
    if (!Object.keys(projectId).length) {
      maxId = 0
    } else {
      maxId = Math.max(...projectId) + 1
    }

    // create project
    const create = new Project({
      title: title,
      information: information,
      users: users,
      tasks: {},
      projectId: maxId,
    })

    await create.save();
    res.status(201).json(create);
  }


  // Test function
  async testProject(req, res) {
    const project = await Project.find({});

    const getProjects = project.map(e => e.projectId);
    let ID
    console.error(!Object.keys(getProjects).length)

    // if (isObjectEmpty(getProjects)) {
    //   ID = 0
    // } else {
    //   ID = Math.max(...getProjects) + 1
    // }
    console.error("1", ID)
    res.status(200).json(project);

  }
}

module.exports = new ProjectAction();