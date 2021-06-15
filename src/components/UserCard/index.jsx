import React from 'react';
import style from './UserCard.module.sass';

function UserCard ({
  user: { firstname, lastname, age, email, id, imageSrc },
}) {
  return (
    <article className={style.userCard}>
      <img className={style.userPicture} src={imageSrc} alt={firstname} />
      <h2>
        {firstname} {lastname}
      </h2>
      <ul>
        <li>Age: {age}</li>
        <li>Email: {email}</li>
      </ul>
    </article>
  );
}

export default UserCard;
