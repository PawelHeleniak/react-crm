import React, { useState } from 'react';

export const Login = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleValue = (e) => {
    let value = e.currentTarget.value;
    let inputObject = e.target.id;

    switch (inputObject) {
      case 'userLogin':
        setLoginValue(value)
        break;

      case 'userPassword':
        setPasswordValue(value)
        break;
      case 'showPassword':
        setVisibilityPassword(!visibilityPassword)
        break;
      case 'rememberPassword':
        setRememberPassword(!rememberPassword)
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
          <h2>Sign in</h2>
          <div className='inputBox'>
            <input type='text' name='login' id='userLogin' placeholder='Username' value={loginValue} onChange={handleValue} />
          </div>
          <div className='inputBox'>
            <input name='password' id='userPassword' placeholder='Password' type={visibilityPassword ? 'text' : 'password'} value={passwordValue} onChange={handleValue} />
          </div>
          <div className='inputBox'>
            <div className="checkboxWrapper">
              <label htmlFor="">Show password</label>
              <input type="checkbox" id='showPassword' value={visibilityPassword} checked={visibilityPassword ? 'checked' : ''} onChange={handleValue} />
            </div>
          </div>
          <div className='inputBox'>
            <div className="checkboxWrapper">
              <label htmlFor="">Remember me</label>
              <input type="checkbox" id='rememberPassword' value={rememberPassword} checked={rememberPassword ? 'checked' : ''} onChange={handleValue} />
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