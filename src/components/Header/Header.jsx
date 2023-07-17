import React, {useEffect, useState} from 'react';
import Svg from '../Svg';
import logo from '../../assets/logo.png';
import './Header.scss';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const [background, setBackground] = useState(location.pathname === '/' ? 'bg-transparent' : 'bg-white');


    useEffect(() => {
        if (location.pathname !== '/') return
          const handleScroll = () => {
            const sectionElement = document.getElementById('banner');
            const rect = sectionElement.getBoundingClientRect();
            const isAtBottom = Math.abs(rect.y) >= rect.height
            if (isAtBottom) {
              setBackground('bg-white')
              // Perform any actions you want when the scroll reaches the target section
            }
            else { setBackground('bg-transparent')}
          };
    
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.addEventListener('scroll', handleScroll);
          }
    
    }, [location.pathname]);

  return (
    <header className={`header flex justify-content-between ${background !== 'bg-transparent' && 'header__white'}`}>
        <div className="container flex justify-content-between align-items-center">
            <img className='logo' src={logo} alt="Beauty Americas" />
            <Svg classes='menu' name='burger-menu' fill={background === 'bg-transparent' ? '#fff' : '#606060'}/>
        </div>
    </header>
  )
}

export default Header