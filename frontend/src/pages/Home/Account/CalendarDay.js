import React from 'react'

export const CalendarDay = ({ day }) => {
  const date = new Date();

  return (
    <div className={date.getDate() !== day ? "calendarDay" : "calendarDay today"}> <span>{day <= 0 ? '' : day}</span></div >
  )
}