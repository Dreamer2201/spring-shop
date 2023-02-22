import styled from "styled-components";

const ModalOverlay = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(148, 229, 169, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    vertical-align: middle;

`;
const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    padding: 10px;
`;

const CloseModalBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
`;

export {ModalOverlay, Modal, CloseModalBtn}