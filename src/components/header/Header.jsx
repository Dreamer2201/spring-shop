import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/NavBar'
import { StyledHeader } from './StyledHeader'
import Logo from '../../images/logo.png';
import LogoHouse from '../../images/logoHome.png';

export default function Header() {
  return (
    <StyledHeader>
        <Link><img src={Logo} alt='logo' width='40' height='40'></img></Link>
        <img src={LogoHouse} alt='logo' width='40' height='40'></img>
        <NavBar />
    </StyledHeader>
  )
}
