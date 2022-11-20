import React from 'react'

export const User = (props) => {
  console.log(props.userData);
  const { age, email, lastName, name, phone, profession, dateOfBirth } = props.userData;
  return (
    <section>
      <div className="wrapper">
        <div className="boxWrapper">
          <div className="box userData">
            <h1>{name} {lastName}</h1>
            <p><span>Age: </span>{age}</p>
            <p><span>Date of birth: </span>{dateOfBirth}</p>
            <p><span>Profession: </span>{profession}</p>
            <p><span>Email: </span>{email}</p>
            <p><span>Phone: </span>{phone}</p>
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
          <div className="box userCalendar">
            <h1>Calendar</h1>
          </div>
        </div>
      </div>
    </section >
  )
}