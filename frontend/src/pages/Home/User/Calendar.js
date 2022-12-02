import React, { useState, useEffect } from 'react'
import { CalendarDay } from './CalendarDay'

export const Calendar = () => {
  const [day, setDay] = useState([])

  //saving number of days in a month
  useEffect(() => {
    //get current date
    const date = new Date()
    let currentMonth = date.getMonth()
    let currentYear = date.getFullYear()

    //get first day in month
    const firstDateDay = new Date(currentYear, currentMonth, 1);
    let firstDay = firstDateDay.getDay();
    let difference = firstDay * -1 + 1

    //handle number of day and push to state
    if (Object.keys(day).length === 0) {
      let number = new Date(currentYear, currentMonth + 1, 0).getDate();
      let result = []
      for (let i = difference; i < number; i++) {
        result.push(i + 1)
      }
      setDay(result);
    }
  })

  const handleDay = day.map(e => <CalendarDay day={e} />)

  return (
    <div className="box userCalendar">
      <h1>Calendar</h1>
      <div className="weekWrapper">
        <div className="daysWeek"><span>Mon</span></div>
        <div className="daysWeek"><span>Tue</span></div>
        <div className="daysWeek"><span>Wed</span></div>
        <div className="daysWeek"><span>Thu</span></div>
        <div className="daysWeek"><span>Fri</span></div>
        <div className="daysWeek"><span>Sat</span></div>
        <div className="daysWeek"><span>Sun</span></div>
      </div>
      <div className="calendar">
        {handleDay}
      </div>
    </div>
  )

}
