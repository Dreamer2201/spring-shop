import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {StyledTitle} from './StyledWomenPage';
import ModalItem from '../../components/Modal/ModalSign';

export default function WomenPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
        <StyledTitle>Women catalog</StyledTitle>
        <ul>
          <li>
            <Link>
              <h3>Item 1</h3>
              <button onClick={toggleModal} type='button'>open</button>
            </Link>
          </li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
            <li>Item 8</li>
            <li>Item 9</li>
            <li>Item 10</li>
        </ul>
        {isModalOpen ? <ModalItem onClose={toggleModal} /> : null}
    </div>
  )
}
