import React from 'react'
import { Link} from 'react-router-dom'

import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from './providers/routes';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter/>
    </div>
  )
}

export default App
