import React from 'react';
import { format } from 'date-fns';
import style from './CurrentDay.module.sass';

function CurrentDay (){
  const today = new Date();
  const dayName = format(today, 'EEEE');
  const dayNumber = format(today, 'dd');
  return(
    <div className={style.wrapper}>
      <div className={style.dayName}>{dayName}</div>
      <div className={style.dayNumber}>{dayNumber}</div>
    </div>
  )
}

export default CurrentDay;