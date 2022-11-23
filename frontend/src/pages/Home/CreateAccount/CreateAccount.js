import React, { useState } from 'react'

export const CreateAccount = () => {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    age: '',
    dateOfBirth: '',
    profession: '',
    email: '',
    phone: '',
    userId: '',
  })

  //send new account
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAge();

    try {
      await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: values.name, lastName: values.lastName, age: values.age, dateOfBirth: values.dateOfBirth, profession: values.profession, email: values.email, phone: values.phone }),
      }).then(res => {
        return res.json()
      }).then(data => {
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleValue = (e) => {
    const { type, value, name } = e.target

    setValues({ ...values, [name]: value })
  }
  // console.log(values);

  // Age calculation
  const handleAge = () => {
    let now = new Date();

    let yearAge = values.dateOfBirth.substring(0, 4);
    let currentYear = now.getFullYear();
    let userAge = currentYear - yearAge

    setValues({ ...values, userAge });
  }

  return (
    <section>
      <div className="wrapper">
        <div className='container'>
          <div className="formBox">
            <form action='/' method='POST' onSubmit={handleSubmit}>
              <h2>Create account</h2>
              <div className="inputBox"><input type="text" name="name" placeholder='Name' value={values.name} onChange={handleValue} required /></div>
              <div className="inputBox"><input type="text" name="lastName" placeholder='Last name' onChange={handleValue} required /></div>
              {/* <div className="inputBox"><input type="text" name="age" placeholder='Age' /></div> */}
              <div className="inputBox"><input type="date" name="dateOfBirth" placeholder='Date of brith' onChange={handleValue} required /></div>
              <div className="inputBox"><input type="text" name="profession" placeholder='Profession' onChange={handleValue} required /></div>
              <div className="inputBox"><input type="email" name="email" placeholder='Email' onChange={handleValue} required /></div>
              <div className="inputBox"><input type="number" name="phone" placeholder='Phone' onChange={handleValue} required /></div>
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