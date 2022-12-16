import React from 'react'
// import { Task } from './Task'

export const ActiveProject = ({ title, information, users }) => {
  // const { title, information, users } = props.projects;
  console.log(title);
  return (
    <div className="projectWrapper">
      <div className="projectName">
        <span>{title}</span>
      </div>
      <div className="projectInfo">
        <span>{information}</span>
      </div>
      <div className="projectUsers">
        <span>{users}</span>
      </div>
      <div className="tasks">
        <div className="tableColumn urgent">
          <div className="tableHeader">
            <span>Pilne</span>
          </div>
          <div className="tableRow">
            <div className="test">
              <span>Wygląd strony logowania</span>
              <p>-popraw czcionke</p>
              <p>-znika na 419</p>
            </div>
          </div>
          <div className="tableRow">
            <div className="test">
              <span>Wygląd strony logowania</span>
              <p>-popraw czcionke</p>
              <p>-znika na 419</p>
            </div>
          </div>
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