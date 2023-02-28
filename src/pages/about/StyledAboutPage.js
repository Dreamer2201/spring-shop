import styled from 'styled-components';

const Container = styled.div`
    // max-width: 1200px;
    // padding-left: 15px;
    // padding-right: 15px;
`

const StyledTitle = styled.h2`
    color: #fff;
    font-size: 22px;
    display: inline-block;
    padding: 0;
    margin: 0;
`;
const BoxAbout = styled.div`
padding: 15px;

`
const WrapperAbout = styled.div`
display: flex;
margin-bottom: 20px;
padding: 15px;
`
const TextAbout = styled.p`
align-self: flex-start;
margin: 0;
padding: 0;
`
const ImgAbout = styled.img`
// display: block;
max-width: 50%;
height: auto;
`

export {Container, StyledTitle, WrapperAbout, ImgAbout, TextAbout};