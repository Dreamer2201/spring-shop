import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavList = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 18px;
    color: green;

    &.active {
        color: red;
    };
`;

export {StyledNavLink, StyledNavList};