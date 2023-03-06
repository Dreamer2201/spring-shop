import styled from "styled-components";
import imgBgHeader from '../../images/img-header/mountains.png'

const StyledHeader = styled.header`
position: relative;
    height: 100px;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: start;
    gap: 20px;
    padding-left: 20px;
    align-items: center;
    background-color: #f5ede6;

    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${imgBgHeader});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    font-family: "Roboto Condensed";
    font-size: 28px;
    color: #fff;

`;

const WellcomeBlock = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
    @media (min-width: 768px) {
        position: absolute;
        bottom: 2px;
        right: 25px;
        display: flex;
        justify-content: start;
        gap: 5px;
        align-items: center;
    }
    
`;

const Wellcome = styled.p`
    margin: 0;
    padding: 0;
    font-size: 18px;
    text-decoration: none;
    text-shadow: #FFA500 1px 0 4px;
    color: #fff ;
`;

export {StyledHeader, Wellcome, WellcomeBlock}