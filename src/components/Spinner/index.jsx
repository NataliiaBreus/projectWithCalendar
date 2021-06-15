import React from 'react';
import style from './Spinner.module.sass';

export default function Spinner () {
  return (
    <div className={style.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
