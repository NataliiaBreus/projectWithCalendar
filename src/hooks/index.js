import { useState, useEffect, useCallback } from 'react';

export function useData (loadData) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsFetching(true);

    loadData()
      .then(data => {
        setData(data);
      })
      .catch(err => setError(err))
      .finally(() => setIsFetching(false));
  }, []);
  return { data, error, isFetching };
}

/*
  Написать hook для отслеживания позиции курсора
*/
export function useMouse () {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = useCallback(event => {
    setX(event.clientX);
    setY(event.clientY);
  }, []);

  return { x, y };
}
