import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import { Nav } from './Nav'
import { Account } from './Account/Account'
import { Users } from './Users/Users'
import { CreateAccount } from './CreateAccount/CreateAccount'

export const Home = () => {
  const [userData, setUserData] = useState()
  const [currentPage, setCurrentPage] = useState('account')

  // get userId
  const location = useLocation();
  let userId = location.state.userId;

  // return to login page
  const navigate = useNavigate()
  const handleReturn = () => {
    navigate('/')
  }

  // get user data
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

  //get actual tab
  const handleTab = (e) => {
    let target = e.target.id;
    setCurrentPage(target);
  }

  return (
    <div className="container homePage">
      {userData ? <Nav action={handleReturn} liAction={handleTab} userData={userData} /> : ''}
      {userData && currentPage === 'account' ? <Account userData={userData} /> : ''}
      {userData && currentPage === 'users' ? <Users /> : ''}
      {userData && currentPage === 'createAccount' ? <CreateAccount /> : ''}
    </div >
  )
}