import React from 'react';
import {StyledNavLink, StyledNavList} from './StyledNavBar';


export default function NavBar() {
  return (
        <StyledNavList>
            <StyledNavLink to="/"> Home </StyledNavLink>
            <StyledNavLink to="/women"> Woman </StyledNavLink>
            <StyledNavLink to="/child"> Child </StyledNavLink>
            <StyledNavLink to="/register"> Sign up </StyledNavLink>
            <StyledNavLink to="/login"> Sign in </StyledNavLink>
        </StyledNavList>
  )
}
