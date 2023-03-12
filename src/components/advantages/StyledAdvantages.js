import styled from "styled-components";


const WrapperAdvantages = styled.div`
    padding: 15px;
`
const WrapperTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`

const TitleAdvantages = styled.h2`
    flex-basis: 50%;
    font-family: 'Rotobo';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 1,57;
    color: #fff;
`
const DiscrAdvantages = styled.p`
flex-basis: 50%;
`

const ListAdvantages = styled.ul`
    list-style: none;   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const ItemAdvantages = styled.li`
    flex-basis: calc((100% -20px) / 3)
`
const NumberOfAdvantages = styled.p`
    font-weight: 500;
    font-size: 40px;
    line-height: 1,57;
    color: rgba(247, 248, 219, 0.3)
`

export {WrapperAdvantages, WrapperTitle, TitleAdvantages, DiscrAdvantages, ListAdvantages, ItemAdvantages, NumberOfAdvantages }