import React from 'react'

export const Task = () => {

  return (
    <>
      <div className="title">
        <h1>Aktualne projekty</h1>
      </div>
      <div className="projectWrapper">
        <div className="projectName">
          <span>TYTUŁ</span>
        </div>
        <div className="projectInfo">
          <span>Informacje o projekcie</span>
        </div>
        <div className="projectUsers">
          <span>Tu będą przypisane osoby</span>
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
    </>
  )
}