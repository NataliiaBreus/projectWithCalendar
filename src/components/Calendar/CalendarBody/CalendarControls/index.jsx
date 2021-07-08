import React from 'react'
import Button from '../../../Button'
import style from './CalendarControls.module.sass';


function CalendarControls ({openPrevMonth, openNextMonth}) {
  return (
    <div className={style.container}>
      <Button className={style.prevBtn} onClick={openPrevMonth}>{'<'}</Button>
      <Button className={style.nextBtn} onClick={openNextMonth}>{'>'}</Button>
    </div>
  )
}

export default CalendarControls;