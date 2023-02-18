import React from 'react';
import {StyledNavLink, StyledNavList} from './StyledNavBar';


export default function NavBar() {
  return (
        <StyledNavList>
            <StyledNavLink to="/"> Home </StyledNavLink>
            <StyledNavLink to="/women"> Woman </StyledNavLink>
            <StyledNavLink to="/child"> Child </StyledNavLink>
        </StyledNavList>
  )
}
