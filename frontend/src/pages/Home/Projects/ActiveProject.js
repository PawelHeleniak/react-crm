import React from 'react'
import { Task } from './Task'


export const ActiveProject = ({ title, information, users, tasks }) => {
  const task = tasks.map(value =>
    <Task
      nameTask={value.nameTask}
      description={value.description}
    />
  )

  return (
    <div className="projectWrapper">
      <div className="projectName">
        <span>{title}</span>
      </div>
      <div className="projectInfo">
        <span>{information}</span>
      </div>
      <div className="projectUsers">
        <span>Uczestnicy: {users.join(', ')} </span>
      </div>
      <div className="tasks">
        <div className="tableColumn urgent">
          <div className="tableName">
            <span>Pilne</span>
          </div>
          {task}
        </div>
        <div className="tableColumn important">
          <div className="tableHeader">
            <span>Ważne</span>
          </div>
          <div className="tableRow">Task1</div>
        </div>
        <div className="tableColumn fix">
          <div className="tableHeader">
            <span>Fix</span>
          </div>
          <div className="tableRow">Task1</div>
        </div>
        <div className="tableColumn done">
          <div className="tableHeader">
            <span>Done</span>
          </div>
          <div className="tableRow">Task1</div>
        </div>
      </div>
    </div>
  )
}