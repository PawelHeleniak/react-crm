import React, { useState } from 'react'
import { Task } from './Task'


export const ActiveProject = ({ title, information, users, tasks }) => {

  const urgentTasks = tasks.filter(value => value.taskHierarchy === 'urgent')
  const importantTasks = tasks.filter(value => value.taskHierarchy === 'important')
  const fixTasks = tasks.filter(value => value.taskHierarchy === 'fix')
  const doneTasks = tasks.filter(value => value.taskHierarchy === 'done')

  const urgent = urgentTasks.map(value => <Task task={value} />)
  const important = importantTasks.map(value => <Task task={value} />)
  const fix = fixTasks.map(value => <Task task={value} />)
  const done = doneTasks.map(value => <Task task={value} />)

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
          {urgent}
        </div>
        <div className="tableColumn important">
          <div className="tableHeader">
            <span>Ważne</span>
          </div>
          {important}
        </div>
        <div className="tableColumn fix">
          <div className="tableHeader">
            <span>Fix</span>
          </div>
          {fix}
        </div>
        <div className="tableColumn done">
          <div className="tableHeader">
            <span>Done</span>
          </div>
          {done}
        </div>
      </div>
    </div>
  )
}