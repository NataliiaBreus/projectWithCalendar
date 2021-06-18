import React, { useContext } from 'react';
import cx from 'classnames';
import { WbSunny, Brightness3 } from '@material-ui/icons';
import style from './Header.module.sass';
import NavItem from './NavItem';
import withTheme from '../HOCs/withTheme';
import { UserContext } from '../../contexts';
import UserContainer from './UserContainer';
import CONSTANTS from '../../constants';
import Button from '../Button';
const { THEMES } = CONSTANTS;

function Header ({ theme, setTheme }) {
 
  const isLightMode = theme === THEMES.LIGHT;

  const classes = cx(style.header, {
    [style.lightTheme]: isLightMode,
    [style.darkTheme]: theme === THEMES.DARK,
  });

  const toggleTheme = () => setTheme(isLightMode ? THEMES.DARK : THEMES.LIGHT);
  const user = useContext(UserContext);
  return (
    <header className={classes}>
      <nav className={style.navMenu}>
        <ul className={style.navList}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/contacts'>Contacts</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
          <NavItem to='/calendar'>Calendar</NavItem>
          <NavItem to='/toDoList'>To Do List</NavItem>
          <NavItem to='/signUpForm'>SignUpForm</NavItem>
          <NavItem to='/tracker'>Tracker</NavItem>
        </ul>
      </nav>
      <Button onClick={toggleTheme}>
        {isLightMode ? (
          <WbSunny style={{ color: '#FFD500' }} />
        ) : (
          <Brightness3 />
        )}
      </Button>
      <UserContainer user={user} />
    </header>
  );
}

export default withTheme(Header);
