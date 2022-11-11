import React from 'react'

export const User = (props) => {
  return (
    <section>
      <div className="wrapper">
        <div className="boxWrapper">
          <div className="box userData">
            <h1>Paweł Heleniak</h1>
            <p><span>Age:</span> 21</p>
            <p><span>Date of birth:</span> 31.10.2001</p>
            <p><span>Profession:</span> Front-end developer</p>
            <p><span>Email:</span> pawel.heleniak@outlook.com</p>
            <p><span>Phone:</span> 677544356</p>
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