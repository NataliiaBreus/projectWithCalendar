import React, { useContext } from 'react';
import UserCard from '../../UserCard';
import { UserContext } from '../../../contexts';

function SubChild (props) {
  const style = {
    border: '3px solid',
    padding: '20px',
  };
  const user = useContext(UserContext);
  return (
    <div style={style}>
      <UserCard user={user} />
    </div>
  );
}

export default SubChild;
