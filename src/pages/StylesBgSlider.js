import styled from "styled-components";

const StyledBoxSlider = styled.div`
    position: relative;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
   
    outline: 1px solid black;
    overflow: hidden;
`;
const ThumbImg = styled.div`
    width: 100%;
    height: 350px;
`

const StyledImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const BtnPrev = styled.button`
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: green;
    z-index: 50;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
`

const BtnNext = styled.button`
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: green;
    z-index: 50;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
`
//   #prevImgSecond {
//     position: absolute;
//     left: 20px;
//     top: 50%;
//     z-index: 50;
//   }
//   #nextImgSecond {
//     position: absolute;
//     right: 20px;
//     top: 50%;
//     z-index: 50;
//   }

export {StyledBoxSlider, ThumbImg, StyledImg, BtnNext, BtnPrev}