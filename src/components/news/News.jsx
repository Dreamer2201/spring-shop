import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../images/house2/1.jpg'

export default function News() {
  return (
    <div>
        <h2>News</h2>
        <ul>
            <li>
                <h3>Title new 1</h3>
                <img src={img1} alt="" width="100" />
                <Link to="/news" >
                    <button type='button' >Click new</button>
                </Link>
                
            </li>
            <li>
                <h3>Title new 2</h3>
                <img src={img1} alt="" width="100" />
                <Link to="/news" >
                    <button type='button' >Click new</button>
                </Link>
                
            </li>
            <li>
                <h3>Title new 3</h3>
                <img src={img1} alt="" width="100" />
                <Link to="/news" >
                    <button type='button' >Click new</button>
                </Link>
                
            </li>
            <li>
                <h3>Title new 4</h3>
                <img src={img1} alt="" width="100" />
                <Link to="/news" >
                    <button type='button' >Click new</button>
                </Link>
                
            </li>
        </ul>
    </div>
  )
}
