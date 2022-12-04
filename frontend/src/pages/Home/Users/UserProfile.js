import React from 'react'

export const UserProfile = ({ data }) => {
  return (
    <div className="userBox">
      <h1>{data.name} {data.lastName}</h1>
      <p><span>Profesion: {data.profession}</span></p>
      <p><span>Skills: </span></p>
    </div >
  )
}