import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
    visibilityPassword: false,
    rememberPassword: false,
  })
  const [error, setError] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: values.login, password: values.password }),
      }).then(res => {
        return res.json()
      }).then(data => {
        if (data) {
          console.log(data);
          const userId = data.userId;

          navigate('/home', {
            state: {
              userId: userId,
            }
          })
        } else {
          setError(true);
          setValues({ ...values, password: '' });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleValue = (e) => {
    const { type, value, name, checked } = e.target

    if (type === "text" || type === "password") {
      setValues({
        ...values, [name]: value
      })
    }
    if (type === "checkbox") {
      setValues({
        ...values, [name]: checked
      })
    }
  }


  return (
    <div className='container loginPage'>
      <div className={"formBox"}>
        <form action='/' method='POST' onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          {error ?
            <div className="incorrectData">
              <div className="info">
                <p>Incorrect data,</p>
                <p>check username or password.</p>
              </div>
            </div>
            : ''}
          <div className='inputBox'>
            <input type='text' name='login' id='userLogin' placeholder='Username' value={values.login} onChange={handleValue} required />
          </div>
          <div className='inputBox'>
            <input type={values.visibilityPassword ? 'text' : 'password'} name='password' id='userPassword' placeholder='Password' value={values.password} onChange={handleValue} required />
          </div>
          <div className='inputBox'>
            <div className="checkboxWrapper">
              <label htmlFor="">Show password</label>
              <input type="checkbox" name='visibilityPassword' id='showPassword' checked={values.visibilityPassword} onChange={handleValue} />
            </div>
          </div>
          <div className='inputBox'>
            <div className="checkboxWrapper">
              <label htmlFor="">Remember me</label>
              <input type="checkbox" name='rememberPassword' id='rememberPassword' checked={values.rememberPassword} onChange={handleValue} />
            </div>
          </div>
          <div className='inputBox submit'>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </div >
  );
}