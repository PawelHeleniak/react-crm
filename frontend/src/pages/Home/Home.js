import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav } from './Nav'
import { User } from './Section/User'
import { useLocation } from "react-router-dom";

export const Home = () => {
  // get userId
  const location = useLocation();
  let userId = location.state.userId;

  const [userData, setUserData] = useState()


  const navigate = useNavigate()
  const handleReturn = () => {
    navigate('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch('http://localhost:3001/userData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId: userId }),
        }).then(res => {
          return res.json()
        }).then(data => {
          setUserData(data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (!userData)
      fetchData();
  });

  return (
    <div className="container homePage">
      {userData ? <Nav action={handleReturn} userData={userData} /> : ''}
      {userData ? <User userData={userData} /> : ''}
    </div >
  )
}