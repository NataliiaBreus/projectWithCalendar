import React, { useState } from 'react';
import style from './CalendarBody.module.sass';
import {
  endOfMonth,
  startOfMonth,
  eachWeekOfInterval,
  format,
  addMonths,
  subMonths,
} from 'date-fns';
import Week from './Week';
import CalendarHeader from './CalendarHeader';
import CalendarControls from './CalendarControls';

 function CalendarBody () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weeksInMonthArray = eachWeekOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const openPrevMonth = () => 
    setCurrentDate(currentDate => subMonths(currentDate, 1));
  
  const openNextMonth = () => 
    setCurrentDate(currentDate => addMonths(currentDate, 1));
  
  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div className={style.container}>
      <h3 className={style.text}>{format(currentDate, 'MMMM yyyy')}</h3>
      <CalendarControls 
      openPrevMonth={openPrevMonth}
      openNextMonth={openNextMonth} />
      <CalendarHeader />
      {weeks}
    </div>
  );
}

export default CalendarBody;