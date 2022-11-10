import React from 'react'

export const Nav = (props) => {
  return (
    <nav>
      <div className="menuTitle">
        <h1>Hi Paweł</h1>
      </div>
      <div className="menuBar">
        <div className="menuElement"><a>User</a></div>
        <div className="menuElement"><a>Project</a></div>
        <div className="menuElement"><a>Statistic</a></div>
      </div>
      <div className="returnButton">
        <button onClick={props.action}>Log out</button>
      </div>
    </nav>
  )
}