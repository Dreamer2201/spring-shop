import { nanoid } from 'nanoid'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SubMenuList } from './StyledNavBar';
import { StyledNavLink } from './StyledNavBar';


export default function Submenu({onClose}) {
    let idHousesLink = nanoid();
    let idDuplex = nanoid();
  return (
    <>
        <SubMenuList onClick={onClose}>
                <StyledNavLink to="/houses" >Houses</StyledNavLink>
                <StyledNavLink to="/duplexes" >Duplex</StyledNavLink>
        </SubMenuList>
    </>
  )
}
