import React from 'react'
import { createPortal } from 'react-dom';
import { ModalOverlay, Modal, CloseModalBtn } from './StyledModalSign';

const modalRoot = document.getElementById('modal-root');

export default function ModalItem ({onClose}) {

  return createPortal(
    <ModalOverlay> 
        <Modal>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quas?</p>
            <CloseModalBtn onClick={() => onClose()} type='button'>X</CloseModalBtn>
        </Modal>
    </ModalOverlay>,
    modalRoot
  )
}
