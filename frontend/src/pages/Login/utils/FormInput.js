import React from 'react';

export const FormInput = (props) => {
  const { name, password, visibilityPassword, rememberPassword } = props.value;
  return (
    <>
      <h2>Sign in</h2>
      <div className='inputBox'>
        <input type='text' name='login' id='userLogin' placeholder='Username' value={name} onChange={props.action} />
      </div>
      <div className='inputBox'>
        <input type={visibilityPassword ? 'text' : 'password'} name='password' id='userPassword' placeholder='Password' value={password} onChange={props.action} />
      </div>
      <div className='inputBox'>
        <div className="checkboxWrapper">
          <label htmlFor="">Show password</label>
          <input type="checkbox" id='showPassword' value={visibilityPassword} checked={visibilityPassword ? 'checked' : ''} onChange={props.action} />
        </div>
      </div>
      <div className='inputBox'>
        <div className="checkboxWrapper">
          <label htmlFor="">Remember me</label>
          <input type="checkbox" id='rememberPassword' value={rememberPassword} checked={rememberPassword ? 'checked' : ''} onChange={props.action} />
        </div>
      </div>
      <div className='inputBox submit'>
        <input type='submit' value='Submit' />
      </div>
    </>
  )
}