import React from 'react'
import natureImg from  '../../images/advantages/sunrise.jpg'
import beachImg from '../../images/advantages/beach.jpg'
import yogaImg from '../../images/advantages/yoga.jpg'
import barbequeImg from '../../images/advantages/barbeq.jpg'
import parkingImg from '../../images/advantages/parking.jpg'
import dogImg from '../../images/advantages/dog.jpg'
import { WrapperAdvantages, WrapperTitle, TitleAdvantages, DiscrAdvantages, ListAdvantages, ItemAdvantages, NumberOfAdvantages, SubTitleAdvantages, WrapperImg, ImgAdvantages } from './StyledAdvantages'


export default function Advantages() {
  return (
    <WrapperAdvantages>
      <WrapperTitle>
          <TitleAdvantages>Advantages of living outside the city</TitleAdvantages>
          <DiscrAdvantages>Each home is designed with families in mind. Here you have peace of mind for children: the houses are equipped with a security system, an ecologically clean suburb and city infrastructure are 5 minutes away.</DiscrAdvantages>
        </WrapperTitle>
        
        <div>
          <ListAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>01</NumberOfAdvantages>
              <SubTitleAdvantages>Nature</SubTitleAdvantages>
              <ImgAdvantages src={natureImg} alt="nature" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>02</NumberOfAdvantages>
              <SubTitleAdvantages>Fresh air</SubTitleAdvantages>
              <ImgAdvantages src={beachImg} alt="beach" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>03</NumberOfAdvantages>
              <SubTitleAdvantages>Barbecue area</SubTitleAdvantages>
              <ImgAdvantages src={barbequeImg} alt="barbeque" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>04</NumberOfAdvantages>
              <SubTitleAdvantages>Parking</SubTitleAdvantages>
              <ImgAdvantages src={parkingImg} alt="parking" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>05</NumberOfAdvantages>
              <SubTitleAdvantages>Peace and quiet</SubTitleAdvantages>
              <ImgAdvantages src={yogaImg} alt="yoga" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>06</NumberOfAdvantages>
              <SubTitleAdvantages>Freedom for pets</SubTitleAdvantages>
              <ImgAdvantages src={dogImg} alt="dog" width="150" height="150" />
            </ItemAdvantages>
          </ListAdvantages>
        </div>
        
    </WrapperAdvantages>
  )
}
