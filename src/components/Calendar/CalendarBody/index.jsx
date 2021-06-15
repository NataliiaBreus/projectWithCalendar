import React, { useState } from 'react';
import style from './CalendarBody.module.sass';
import {
  endOfMonth,
  startOfMonth,
  eachWeekOfInterval,
} from 'date-fns';
import Week from './Week';
import CalendarHeader from './CalendarHeader';

 function CalendarBody () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weeksInMonthArray = eachWeekOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  console.dir(weeksInMonthArray);
  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div className={style.container}>
      <CalendarHeader />
      {weeks}
    </div>
  );
}

export default CalendarBody;