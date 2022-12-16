import React from 'react'

export const Nav = (props) => {
  const { name } = props.userData;

  return (
    <nav>
      <div className="menuTitle">
        <h1>Hi {name}</h1>
      </div>
      <div className="menuBar">
        <div className="menuElement"><a id="account" onClick={props.liAction}>Account</a></div>
        <div className="menuElement"><a id="projects" onClick={props.liAction}>Projects</a></div>
        <div className="menuElement"><a id="statistic" onClick={props.liAction}>Statistic</a></div>
        <div className="menuElement"><a id="users" onClick={props.liAction}>Users</a></div >
        <div className="menuElement"><a id="createAccount" onClick={props.liAction}>Create account</a></div >
      </div >
      <div className="returnButton">
        <button onClick={props.action}>Log out</button>
      </div>
    </nav >
  )
}