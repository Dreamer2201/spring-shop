import styled from "styled-components";

const WrapperNews = styled.div`
    margin-top: 40px;
`

const TitleNews = styled.h2`
    padding: 0;
    margin: 0;

    flex-basis: 50%;
    font-family: 'Rotobo';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 1,57;
    color: rgb(123, 114, 112);
    text-align: center;
`
const ListNews = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    gap: 10px 20px;
`

const ItemNews = styled.li`
    width: 240px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px -1px 9px 0px rgba(87,80,78,0.59);
    display: flex;
    flex-direction: column;
    padding: 4px;
    background-color: rgb(238, 229, 223);
`
const NewContent = styled.p`
font-size: 14px;
`
const DotCard = styled.p`
color: #ff0000;
`

//   .show-more .dotsCard {
//     display: none;
//   }
//   .show-more .additionalText {
//     display: inline;
//   }
//   .additionalText {
//     display: none;
//   }
//   .btnReadMore {
//     width: 150px;
//     height: 20px;
//     padding: 4px;
//     color: #ff0000;
//   }
//   .imgCard {
//     display: block;
//     width: 100%;
//     height: 50%;
//     object-fit: cover;
//   }

export {WrapperNews, TitleNews, ListNews, ItemNews, NewContent, DotCard}