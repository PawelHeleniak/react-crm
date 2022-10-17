import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()
  const handleReturn = () => {
    navigate('/')
  }
  return (
    <div className="container">
      <button onClick={handleReturn}>RETURN</button>
      <p>TEST</p>
    </div >
  )
}