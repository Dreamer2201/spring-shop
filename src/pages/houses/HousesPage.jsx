import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function HousesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const idItem = nanoid()

  return (
    <div>
      <h2>HOUSES</h2>
      <ul>
          <li key={idItem}>
            <Link to={`/houses/:${idItem}`}>
              <h3>Item 1</h3>
              {/* <button onClick={toggleModal} type='button'>open</button> */}
            </Link>
          </li>
            <li>Item 2</li>
        </ul>
    </div>
  )
}
