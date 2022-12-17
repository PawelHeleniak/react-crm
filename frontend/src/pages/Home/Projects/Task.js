import React from 'react'

export const Task = ({ nameTask, description }) => {
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