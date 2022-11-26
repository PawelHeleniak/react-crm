import React, { useState } from 'react'

export const CreateAccount = () => {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    dateOfBirth: '',
    profession: '',
    email: '',
    phone: '',
    userId: '',
  })
  const [age, setAge] = useState('')

  //send new account
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let createLogin = `${values.name}_${values.lastName}`
      await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ name: values.name, lastName: values.lastName, age: values.age, dateOfBirth: values.dateOfBirth, profession: values.profession, email: values.email, phone: values.phone }),
        body: JSON.stringify({ login: createLogin, password: 'Admin123' }),
      }).then(res => {
        return res.json()
      }).then(data => {
        if (data)
          handleUserData()
      });
    } catch (err) {
      console.log(err);
    }
  }

  // send data user
  const handleUserData = async (e) => {
    try {
      await fetch('http://localhost:3001/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: values.name, lastName: values.lastName, age: age, dateOfBirth: values.dateOfBirth, profession: values.profession, email: values.email, phone: values.phone }),
      }).then(res => {
        return res.json()
      }).then(data => {
        if (data)
          setValues({ ...values, name: '', lastName: '', dateOfBirth: '', profession: '', email: '', phone: '', userId: '' });
        setValues('');
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleValue = (e) => {
    const { type, value, name } = e.target

    setValues({ ...values, [name]: value })

    if (type === 'date')
      handleAge(value)
  }

  // Age calculation
  const handleAge = (value) => {
    let now = new Date();

    let yearAge = value.substring(0, 4);
    let currentYear = now.getFullYear();
    let userAge = currentYear - yearAge

    setAge(userAge);
  }

  return (
    <section>
      <div className="wrapper">
        <div className='container'>
          <div className="formBox">
            <form action='/' method='POST' onSubmit={handleSubmit}>
              <h2>Create account</h2>
              <div className="inputBox"><input type="text" name="name" placeholder='Name' value={values.name} onChange={handleValue} required /></div>
              <div className="inputBox"><input type="text" name="lastName" placeholder='Last name' value={values.lastName} onChange={handleValue} required /></div>
              {/* <div className="inputBox"><input type="text" name="age" placeholder='Age' /></div> */}
              <div className="inputBox"><input type="date" name="dateOfBirth" placeholder='Date of birth' value={values.dateOfBirth} onChange={handleValue} required /></div>
              <div className="inputBox"><input type="text" name="profession" placeholder='Profession' value={values.profession} onChange={handleValue} required /></div>
              <div className="inputBox"><input type="email" name="email" placeholder='Email' value={values.email} onChange={handleValue} required /></div>
              <div className="inputBox"><input type="number" name="phone" placeholder='Phone' value={values.phone} onChange={handleValue} required /></div>
              <div className='inputBox submit'>
                <input type='submit' value='Create' />
              </div>
            </form>
          </div>
        </div >
      </div>
    </section >
  )
}