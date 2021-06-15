import React from 'react';
import style from './Day.module.sass';
import {format} from 'date-fns';

export default function Day ({day}){
  return (
    <div className={style.container}>
      {format(day, 'dd')}
    </div>
  )
}