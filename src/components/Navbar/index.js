import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
//import WebFont from 'webfontloader';

import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './NavbarElements';

  const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);}, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
      <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome} style={{fontFamily: 'Scriptina Pro'}}>Tierra <div style = {{ whiteSpace: "pre" }}>{`${'  '}`}</div> Morena</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to= 'nosotros' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= 'ubicacion' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Ubicacion</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "contacto" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contacto</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;

