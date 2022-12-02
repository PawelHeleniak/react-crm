import React, { useState, useEffect } from 'react'

export const Users = () => {

  // get users data
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch('http://localhost:3001/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({}),
        }).then(res => {
          return res.json()
        }).then(data => {
          console.log(data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  });

  return (
    <section>
      <div className="wrapper">
        <div className='userBoxWrapper'>
          <div className="userBox">
            <h1>Paweł Heleniak</h1>
            <p><span>Profesion: </span></p>
            <p><span>Skills: </span></p>
          </div>
          <div className="userBox">
            <h1>Admin Admin</h1>
            <p><span>Profesion: </span></p>
            <p><span>Skills: </span></p>
          </div>
        </div>
      </div>
    </section>
  )
}