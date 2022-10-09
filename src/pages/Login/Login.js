import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

import { FormInput } from './utils/FormInput'

export const Login = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
    visibilityPassword: false,
    rememberPassword: false,
  })

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home')
  }

  const handleValue = (e) => {
    let value = e.currentTarget.value;
    let inputObject = e.target.id;

    switch (inputObject) {
      case 'userLogin':
        setValues({ login: value })
        break;
      case 'userPassword':
        setValues({ password: value })
        break;
      case 'showPassword':
        setValues({ visibilityPassword: value })
        break;
      case 'rememberPassword':
        setValues({ rememberPassword: value })
        break;
      default:
        console.log("Błąd");
        break;
    }
  }

  return (
    <div className='container'>
      <div className="formBox">
        <form action='' method='post' onSubmit={handleSubmit}>
          <FormInput value={values} action={handleValue} />
        </form>
      </div>
    </div>
  );
}