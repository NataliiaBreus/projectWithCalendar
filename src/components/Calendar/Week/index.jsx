import React from 'react';
import style from './Week.module.sass';
import {eachDayOfInterval, startOfWeek, endOfWeek} from 'date-fns';
import Day from './Day';

export default function Week ({startDate}) {

  const daysInWeekArray = eachDayOfInterval({
    start: startOfWeek(startDate),
    end: endOfWeek(startDate),
  });


  const daysArray = daysInWeekArray.map(currentDay => {
    <Day day={currentDay} key={currentDay.toLocaleDateString()} />
  });
  return (
    <div className={style.container}>
      {daysArray}
    </div>
  )
}