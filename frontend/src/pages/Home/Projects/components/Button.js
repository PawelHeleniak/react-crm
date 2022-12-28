import React from 'react'
export const Button = (props) => {
  return (
    <div className="buttonWrapper">
      <button onClick={props.create}><span className='material-icons'>add</span></button>
    </div>
  )
}