import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledTitle, WrapperAbout, ImgAbout, TextAbout } from './StyledAboutPage';
import ModalItem from '../../components/Modal/ModalSign';
import imgOne from '../../images-house/17.jpg'
import imgTwo from '../../images-house/16.jpg'
import imgThree from '../../images-house/9.jpg'
import { MainContentHomePage } from '../StyledHomePage';


export default function AboutCompanyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <MainContentHomePage>
        <StyledTitle>About us</StyledTitle>
        <ul>
          <li>
            <Link>
              <h3>Item 1</h3>
              <button onClick={toggleModal} type='button'>open</button>
            </Link>
          </li>
            <li>Item 2</li>
        </ul>
        <div>
          <WrapperAbout>
            <TextAbout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus dolor dolore id nemo, ut eum et sed voluptate provident dicta? Eius est exercitationem voluptate similique ducimus qui consequatur. Sint exercitationem sequi distinctio cupiditate reprehenderit iste, eius nobis, ducimus saepe natus neque, quaerat inventore asperiores optio nisi doloremque laborum tempore.</TextAbout>
            <ImgAbout src={imgOne} alt="firstImg" />
          </WrapperAbout>
          <WrapperAbout>
            <ImgAbout src={imgTwo} alt="secondImg" />
            <TextAbout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus dolor dolore id nemo, ut eum et sed voluptate provident dicta? Eius est exercitationem voluptate similique ducimus qui consequatur. Sint exercitationem sequi distinctio cupiditate reprehenderit iste, eius nobis, ducimus saepe natus neque, quaerat inventore asperiores optio nisi doloremque laborum tempore.</TextAbout>
          </WrapperAbout>
          <WrapperAbout>
            <TextAbout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus dolor dolore id nemo, ut eum et sed voluptate provident dicta? Eius est exercitationem voluptate similique ducimus qui consequatur. Sint exercitationem sequi distinctio cupiditate reprehenderit iste, eius nobis, ducimus saepe natus neque, quaerat inventore asperiores optio nisi doloremque laborum tempore.</TextAbout>
            <ImgAbout src={imgThree} alt="thierdImg" />
          </WrapperAbout>
        </div>
        {isModalOpen ? <ModalItem onClose={toggleModal} /> : null}
    </MainContentHomePage>
  )
}
