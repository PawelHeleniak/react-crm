import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
    visibilityPassword: false,
    rememberPassword: false,
  })

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/crm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: values.login, password: values.password }),
      })
      console.log(response);
      return response.json();
    } catch (err) {
      console.log(err);
    }
    // navigate('/home')
  }

  return (
    <div className='container'>
      <div className="formBox">
        <form action='/' method='POST' onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className='inputBox'>
            <input type='text' name='login' id='userLogin' placeholder='Username' value={values.login} onChange={e => setValues({ ...values, login: e.target.value })} />
          </div>
          <div className='inputBox'>
            <input type={values.visibilityPassword ? 'text' : 'password'} name='password' id='userPassword' placeholder='Password' value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
          </div>
          <div className='inputBox'>
            <div className="checkboxWrapper">
              <label htmlFor="">Show password</label>
              <input type="checkbox" id='showPassword' value={values.visibilityPassword} checked={values.visibilityPassword ? 'checked' : ''} onChange={e => setValues({ ...values, visibilityPassword: e.target.value })} />
            </div>
          </div>
          <div className='inputBox'>
            <div className="checkboxWrapper">
              <label htmlFor="">Remember me</label>
              <input type="checkbox" id='rememberPassword' value={values.rememberPassword} checked={values.rememberPassword ? 'checked' : ''} onChange={e => setValues({ ...values, rememberPassword: e.target.value })} />
            </div>
          </div>
          <div className='inputBox submit'>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </div>
  );
}