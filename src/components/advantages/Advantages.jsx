import React from 'react'
import natureImg from  '../../images/advantages/sunrise.jpg'
import beachImg from '../../images/advantages/beach.jpg'
import yogaImg from '../../images/advantages/yoga.jpg'
import barbequeImg from '../../images/advantages/barbeq.jpg'
import parkingImg from '../../images/advantages/parking.jpg'
import dogImg from '../../images/advantages/dog.jpg'
import { WrapperAdvantages, WrapperTitle, TitleAdvantages, DiscrAdvantages, ListAdvantages, ItemAdvantages, NumberOfAdvantages } from './StyledAdvantages'


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
              <p>Nature</p>
              <img src={natureImg} alt="nature" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>02</NumberOfAdvantages>
              <p>Fresh air</p>
              <img src={beachImg} alt="beach" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>03</NumberOfAdvantages>
              <p>Barbecue area</p>
              <img src={barbequeImg} alt="barbeque" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>04</NumberOfAdvantages>
              <p>Parking</p>
              <img src={parkingImg} alt="parking" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>05</NumberOfAdvantages>
              <p>Peace and quiet</p>
              <img src={yogaImg} alt="yoga" width="150" height="150" />
            </ItemAdvantages>
            <ItemAdvantages>
              <NumberOfAdvantages>06</NumberOfAdvantages>
              <p>Possibility to have a dog</p>
              <img src={dogImg} alt="dog" width="150" height="150" />
            </ItemAdvantages>
          </ListAdvantages>
        </div>
        
    </WrapperAdvantages>
  )
}
