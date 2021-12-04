import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
    } from './SidebarElements'

    const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="nosotros" onClick={toggle}>Nosotros</SidebarLink>
                    <SidebarLink to="servicios" onClick={toggle}>Servicios</SidebarLink>
                    <SidebarLink to="ubicacion" onClick={toggle}>Ubicación</SidebarLink>
                    <SidebarLink to="contacto" onClick={toggle}>Contacto</SidebarLink>
                </SidebarMenu>
                
            </SidebarWrapper>
        </SidebarContainer>
    );
};

 export default Sidebar;
