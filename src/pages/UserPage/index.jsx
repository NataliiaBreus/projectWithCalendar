import React from 'react';
import UserCard from '../../components/UserCard';

export default function UserPage (props) {
  return (
    <section>
      <h1>UserPage</h1>
      <UserCard {...props} />
    </section>
  );
}
