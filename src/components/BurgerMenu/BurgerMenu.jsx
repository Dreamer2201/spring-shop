import React from 'react';
import { createPortal } from 'react-dom';
import { OverlayModal, Modal, WrapperModalNavMenu, ItemNavLinkBurger,WellcomeModal, NavBurgerLink, BtnLogOutModal, BtnUserMenuModal } from './StyledBurgerMenu';
const modalRoot = document.getElementById('modal-root');

export default function BurgerMenu ({onClose}) {

    return createPortal(
    <OverlayModal onClick={() => onClose()}>
      <Modal>
        <WellcomeModal>NameUser</WellcomeModal>
        <WrapperModalNavMenu>
            <ItemNavLinkBurger>
                <NavBurgerLink  to="/">Home</NavBurgerLink >
            </ItemNavLinkBurger>
            <ItemNavLinkBurger>
                <NavBurgerLink  to="/about">About</NavBurgerLink >
            </ItemNavLinkBurger>
            <ItemNavLinkBurger>
                <NavBurgerLink to='/projects'>Projects</NavBurgerLink>
            </ItemNavLinkBurger>
            </WrapperModalNavMenu>
            <BtnLogOutModal type='button' 
            >Log out</BtnLogOutModal>
                <BtnUserMenuModal onClick={() => onClose()} type='button'>X</BtnUserMenuModal>
            </Modal>
    </OverlayModal>,
    modalRoot
  )
  }