import React, { useState, useEffect } from 'react'
import { CalendarDay } from './CalendarDay'

export const Calendar = () => {
  const [date, setDate] = useState({
    allDay: [],
    month: '',
    year: '',
  });

  //saving number of days in a month
  useEffect(() => {
    handleDate(null)
  }, [])

  const handleDate = (count) => {
    let month
    let year

    if (count === null) {
      month = new Date().getMonth()
      year = new Date().getFullYear()
    } else if (count > -1 && count < 12) {
      month = count
      year = date.year
    } else if (count === 12) {
      year = date.year + 1
      month = 0
    } else if (count === -1) {
      year = date.year - 1
      month = 11
    }

    //get first day in month
    const firstDateDay = new Date(year, month, 0);
    let firstDay = firstDateDay.getDay();
    let difference = firstDay * -1;

    //handle number of day and push to state
    let numberDays = new Date(year, month + 1, 0).getDate();
    let result = []

    for (let i = difference; i < numberDays; i++) {
      result.push(i + 1)
    }

    setDate({ allDay: result, month: month, year: year });
  }

  const handleDay = date.allDay.map(e => <CalendarDay day={e} />)

  return (
    <div className="box userCalendar">
      <h1>{`${date.year}-${date.month + 1}`}</h1>
      <div className="calendar">
        <div className="arrowLeft"><a className="material-icons" onClick={() => handleDate(date.month - 1)}>arrow_back_ios</a></div>
        <div className="moduleSection">
          <div className="weekWrapper">
            <div className="daysWeek"><span>Mon</span></div>
            <div className="daysWeek"><span>Tue</span></div>
            <div className="daysWeek"><span>Wed</span></div>
            <div className="daysWeek"><span>Thu</span></div>
            <div className="daysWeek"><span>Fri</span></div>
            <div className="daysWeek"><span>Sat</span></div>
            <div className="daysWeek"><span>Sun</span></div>
          </div>
          <div className={new Date().getMonth() !== date.month || new Date().getFullYear() !== date.year ? "dayWrapper" : "dayWrapper active"}>
            {handleDay}
          </div>
        </div>
        <div className="arrowRight"><a className="material-icons" onClick={() => handleDate(date.month + 1)}>arrow_forward_ios</a></div>
      </div>
    </div>
  )

}
