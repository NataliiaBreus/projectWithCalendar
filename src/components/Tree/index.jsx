import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import withTheme from '../HOCs/withTheme';
import style from './Tree.module.sass';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

function Tree (props) {
  const { theme } = props;
  const classes = cx(style.header, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });
  return (
    <div className={classes}>
      <Parent />
    </div>
  );
}

export default withTheme(Tree);
