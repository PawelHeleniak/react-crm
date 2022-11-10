import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav } from './Nav'
import { Main } from './Main'

export const Home = () => {
  const navigate = useNavigate()
  const handleReturn = () => {
    navigate('/')
  }
  return (
    <div className="container homePage">
      <Nav action={handleReturn} />
      {/* <Main /> */}
    </div >
  )
}