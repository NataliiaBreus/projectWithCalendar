import React from 'react';
import { useMouse } from '../../hooks';

function MouseCoordinatesDisplay () {
  const { x, y } = useMouse();
  return (
    <div style={{ height: '100vh' }}>
      <h1>Перемещайте курсор мыши!</h1>
      <p>
        Текущее положение курсора мыши: ({x}, {y})
      </p>
    </div>
  );
}

export default MouseCoordinatesDisplay;
