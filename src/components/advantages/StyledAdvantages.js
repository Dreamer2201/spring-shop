import styled from "styled-components";


const WrapperAdvantages = styled.div`
    padding: 15px;
    background-color: #fff;
`
const WrapperTitle = styled.div`
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

const TitleAdvantages = styled.h2`
    padding: 0;
    margin: 0;

    flex-basis: 50%;
    font-family: 'Rotobo';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 1,57;
    color: rgb(123, 114, 112);
`
const DiscrAdvantages = styled.p`
    padding: 0;
    margin: 0;

    flex-basis: 50%;
    text-align: justify;

`

const ListAdvantages = styled.ul`
    padding: 0;
    margin: 0;

    list-style: none;   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`

const ItemAdvantages = styled.li`
    position: relative;

    flex-basis: calc((100% -20px) / 3);
    // background-color: grey;
    // outline: 1px solid red;

    // text-align: center;

    :nth-child(2) {
        transform: translateY(70px);
    }
    :nth-child(5) {
        transform: translateY(70px);
    }
    
`
const NumberOfAdvantages = styled.p`
    padding: 0;
    margin: 0;

    font-weight: 500;
    font-size: 40px;
    line-height: 1,57;
    color: rgba(123, 114, 112, 0.3)
`
const SubTitleAdvantages = styled.h3`
    position: absolute;
    top: 3px;
    left: 40px;
    color: rgb(123, 114, 112);
`
const WrapperImg = styled.div`
    width: 90%;
    height: 90%;
`
const ImgAdvantages = styled.img`
    border-radius: 10px;
    display: block;
    width: 80%;
    height: 80%;
    object-fit: cover;
    box-shadow: 5px -4px 5px 0px rgba(133,121,99,0.45);

`

export {WrapperAdvantages, WrapperTitle, TitleAdvantages, DiscrAdvantages, ListAdvantages, ItemAdvantages, NumberOfAdvantages, SubTitleAdvantages, WrapperImg, ImgAdvantages}