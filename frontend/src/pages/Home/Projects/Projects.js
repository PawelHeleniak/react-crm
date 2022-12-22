import React, { useState } from 'react'
import { ActiveProject } from './ActiveProject'

export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: 'TYTUŁ',
      information: 'Informacje o projekcie',
      users: ['jakub test', 'pawel test', 'dawid test'],
      tasks: [{
        taskHierarchy: 'important',
        nameTask: 'nazwa taska0',
        description: '-popraw czcionke'
      }]
    },
    {
      title: 'TYTUŁ2',
      information: 'Informacje o projekcie2',
      users: ['Tu będą przypisane osoby2'],
      tasks: [
        {
          taskHierarchy: 'important',
          nameTask: 'nazwa taska1',
          description: '-popraw czcionke1'
        },
        {
          taskHierarchy: 'important',
          nameTask: 'nazwa taska1',
          description: '-popraw czcionke1'
        },
        {
          taskHierarchy: 'done',
          nameTask: 'nazwa taska2',
          description: '-popraw czcionke2'
        },
      ]

    },
  ])

  const activeProject = projects.map(value =>
    <ActiveProject
      title={value.title}
      information={value.information}
      users={value.users}
      taskHierarchy={value.taskHierarchy}
      tasks={value.tasks}
    />)


  return (
    <section>
      <div className='wrapper projects'>
        <div className="box">
          <div className="title">
            <h1>Aktualne projekty</h1>
          </div>
          {activeProject}
        </div>
        <div className="box">
          <div>
            <h1>Ukończone projekty</h1>
          </div>
        </div>
        <div className="projectInfo">
        </div>
      </div>

    </section>
  )
}