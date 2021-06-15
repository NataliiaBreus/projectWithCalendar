import React from 'react';
import { useMouse } from '../../hooks';

function CatWithMouse () {
  const { x, y } = useMouse();
  const styles = {
    width: '50px',
    objectFit: 'cover',
    position: 'fixed',
    top: `${y + 2}px`,
    left: `${x + 2}px`,
    userSelect: 'none',
  };

  return (
    <img
      src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/68024/black-cat-face-clipart-md.png'
      alt='cat'
      style={styles}
    />
  );
}

export default CatWithMouse;
