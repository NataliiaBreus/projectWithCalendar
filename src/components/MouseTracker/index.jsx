import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MouseTracker ({ children }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = event => {
    setX(event.clientX);
    setY(event.clientY);
  };

  return children({ x, y });
}

MouseTracker.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MouseTracker;
