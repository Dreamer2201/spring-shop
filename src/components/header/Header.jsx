import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/NavBar'
import { useAuth } from '../../hooks/useAuth'
import { StyledHeader, Wellcome, WellcomeBlock } from './StyledHeader'
import LogoHouse from '../../images/logoHome.png';
import { RxAvatar } from "react-icons/rx";

export default function Header() {
  const {isAuth, email} = useAuth();
  return (
    <StyledHeader>
        <Link><img src={LogoHouse} alt='logo' width='40' height='40'></img></Link>
        <NavBar />
        {isAuth ? <WellcomeBlock>
          <RxAvatar color='#fff' size='40px'/>
          <Wellcome>Wellcome, {email}</Wellcome>
          </WellcomeBlock> : <WellcomeBlock>
          <RxAvatar color='#fff' size='40px'/>
          <Wellcome>Wellcome, dear guest</Wellcome></WellcomeBlock>}
    </StyledHeader>
  )
}
