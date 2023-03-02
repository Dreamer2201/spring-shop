import React from 'react'
import homeImg from  '../../images/images-house/8.jpg'

export default function Advantages() {
  return (
    <div>
        <h2>Advantages of living outside the city</h2>
        <p>Each home is designed with families in mind. Here you have peace of mind for children: the houses are equipped with a security system, an ecologically clean suburb and city infrastructure are 5 minutes away.</p>
        <img src={homeImg} alt="image house" width="150" height="150" />
        <div>
            <p>Nature</p>
            <p>Fresh air</p>
            <p>Barbecue area</p>
            <p>Parking</p>
            <p>Peace and quiet</p>
            <p>Possibility to have a dog</p>
        </div>
        
    </div>
  )
}
