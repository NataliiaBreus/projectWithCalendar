import React from 'react';
import style from './Calendar.module.sass';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';

 function Calendar () {
  return (
    <div className = {style.container}>
      <CurrentDay />
      <CalendarBody />

    </div>
  );
}
export default Calendar;