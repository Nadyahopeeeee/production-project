import React, {Suspense} from 'react'

import { Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from './providers/routes';
import { useTheme } from './providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';



const App = () => {
  const {theme} = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar/>
        <div className='content-page'>
          <SideBar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
