import React from 'react';
import style from './UserContainer.module.sass';

export default function UserContainer ({
  user: { firstname, lastname, imageSrc },
}) {
  
  return (
    <div className={style.userContainer}>
      <img src={imageSrc} alt={firstname} />
      <span>
        {firstname} {lastname}
      </span>
    </div>
  );
}
