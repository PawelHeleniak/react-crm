import React from 'react'

export const Modal = (props) => {

  return (
    <>
      <div className="projectWrapper modal">
        <form action="">
          <div className="inputBox">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <div className="inputBox">
            <label htmlFor="information">Information</label>
            <input type="text" name="information" />
          </div>
          <div className="inputBox">
            <label htmlFor="users">Users</label>
            <input type="text" name="users" />
          </div>
        </form>
      </div>
    </>
  )
}