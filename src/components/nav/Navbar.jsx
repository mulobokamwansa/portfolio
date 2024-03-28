import { useState } from 'react';
import React from 'react';
import IMAGLOG from '../../assets/log1.JPG'
import './Navbar.css';


const Navtop = () => {

    //function for navbar menu
    const [activeNav, setActiveNav] = useState("#");
    
    //function for toggle button
    const [toggleIcon, setToggleIcon] = useState('top__menu');


    //function for with close toggle 

    const [toggleClose, setToggleClose] = useState('nav__toggler');
 
    const navToggle = () => {

    //toggleIcon function
    toggleIcon === 'top__menu'?
    setToggleIcon('top__menu  toggle') :
    setToggleIcon('top__menu');


    //toggler close function

    toggleClose ==='nav__toggler'?
    setToggleClose('nav__toggler nav__close') :
    setToggleClose('nav__toggler');
};

    return (
        <nav className='top'>
            <div className='style-nav'>
            <div> </div>

            <div className='style-bar'>
            <div> </div>

            <div className='style-navbar'>
            <div> </div>
            </div>

            <div className='style-naba'>
            <div> </div>
            </div>

            </div>

            </div>

             <div className="imag__log">
                <img src={IMAGLOG} alt=''/>  
             </div>

             <div class="variable">
             <h1 className='imag-p'>P</h1>
                <h3 className='imag-p1'> ORTFOLIO.</h3>
            </div>
                        
            <ul className={toggleIcon}>
                <li className="top__item"> 
                <a href="#" onClick={() => setActiveNav('#')} 
                className={activeNav === '#'? 'active' : ''}>Home</a>
                </li>

                <li className="top__item"> 
                <a href="#experience" onClick={() => setActiveNav('#experience')}
                 className={activeNav === '#experience'? 'active' : ''}>Experience</a>
                </li>

                <li className="top__item"> 
                <a href="#services" onClick={() => setActiveNav('#services')}
                 className={activeNav ==='#services'? 'active' : ''}>Services</a>
                </li>

                <li className="top__item"> 
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
                 className={activeNav === '#portfolio'? 'active' : ''}>Portfolio</a>
                </li>

                <li className="top__item">
                 <a href="#contact" onClick={() => setActiveNav('#contact')}
                 className={activeNav === '#contact'? 'active' : ''}>Contact</a>
                 </li>
            </ul>

            <div className={toggleClose} onClick={navToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navtop;  