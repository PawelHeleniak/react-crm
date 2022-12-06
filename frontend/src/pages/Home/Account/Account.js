import React from 'react'
import { Calendar } from './Calendar'
import photo from '../../../assets/img/default_account_96px.png';

export const Account = (props) => {
  const { age, email, lastName, name, phone, profession, dateOfBirth } = props.userData;

  return (
    <section>
      <div className="wrapper">
        <div className="boxWrapper">
          <div className="box userData">
            <div className="primaryInfo">
              <div className="userPhoto">
                <img src={photo} />
              </div>
              <div className="userName">
                <h1>{name} {lastName}</h1>
              </div>
            </div>
            <div className="generalInfo">
              <div className="title">
                <span>General</span>
              </div>
              <div className="information">
                <p><span className='first'>Age</span><span>{age} years</span></p>
                <p><span className='first'>Date of birth</span><span>{dateOfBirth}</span></p>
                <p><span className='first'>Profession</span><span>{profession}</span></p>
                <p><span className='first'>Email</span><span>{email}</span></p>
                <p><span className='first'>Phone</span><span>{phone}</span></p>
              </div>
            </div>
          </div>
          <div className="box userSkills">
            <h1>Skills</h1>
            <div className="skills">
              <span>Html</span>
              <span>Css</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>
        <div className="boxWrapper">
          <Calendar />
        </div>
      </div>
    </section >
  )
}