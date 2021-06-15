import React, { useContext, useState, useMemo, useCallback } from 'react';
import cx from 'classnames';
import style from './Home.module.sass';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

/*
  1. Переделать переключение тем на хуки
  2. Добавить переключение темы в Home
*/
function Home () {
  const [theme] = useContext(ThemeContext);
  const [value, setValue] = useState(1);

  const preCount = useMemo(() => {
    let i = 0;
    for (let j = 0; j < 1000000000; j++) {
      i += j;
    }
    return i;
  }, []);

  const count = useCallback(value => preCount ** value, [value])

  /*const count = useCallback((value) => {
    let i = 0;
    for (let j = 0; j < 1000000000; j++) {
      i += j;
    }
    return i  ** value;
  }, [value]);*/

  const currentValue = useMemo(() => count(value), [value]);

  const classes = cx(style.container, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });

  return (
    <div className={classes}>
      <h1>HOME PAGE</h1>
      <div>{currentValue}</div>
      <div>VALUE: {value}</div>
      <button onClick={() => setValue(prev => prev + 1)}>Click me</button>
    </div>
  );
}

export default Home;
