import React, { useState, useEffect } from 'react'
import { UserProfile } from './UserProfile'

export const Users = () => {
  const [allUsers, setAllUsers] = useState()
  // get users data
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch('http://localhost:3001/userAllData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({}),
        }).then(res => {
          return res.json()
        }).then(data => {
          setAllUsers(data)
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (!allUsers)
      fetchData();
  });
  const userProfile = allUsers?.map(e => <UserProfile data={e} />)

  return (
    <section>
      <div className="wrapper">
        <div className='userBoxWrapper'>
          {userProfile}
        </div>
      </div>
    </section>
  )
}