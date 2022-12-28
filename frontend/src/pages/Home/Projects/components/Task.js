import React from 'react'

export const Task = (props) => {
  const { nameTask, description } = props.task

  return (
    <>
      <div className="task">
        <div className="test">
          <span>{nameTask}</span>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}