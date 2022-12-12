import React from 'react';
import styled from 'styled-components';

function SuccessModal({ setThanksModal }) {
  return (
    <Modal>
      <ModalContent>
        <Head>Thanks!</Head>
        <SubHead>Your Booking is succesfully Submitted.</SubHead>
        <CloseButton  onClick={() => setThanksModal(false)} > Close </CloseButton>
      </ModalContent>
    </Modal>
  );
}

export default SuccessModal;

const Modal = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
overflow: auto;
`;

const ModalContent = styled.div`
width: 614px;
height: 204px;
background-color: #0A3047;
border-radius: 32px;
text-align: center;
position: relative;

@media(max-width: 800px){
  width: 95vw;
  height: 145px;
}
`;

const Head = styled.h1`
font-family: Nielmaden;
font-weight: Bold;
font-size: 40px;
line-height: 120%;
color: #FBF1E6;
@media(max-width: 800px){
  font-size: 28.4px;
}
`;

const SubHead = styled.p`
font-family: Century Gothic;
font-weight: Regular;
font-size: 24px;
line-height: 140%;
color: #FBF1E6;
@media(max-width: 800px){
  font-size: 17.4px;
}
`;

const CloseButton = styled.button`
border: none;
border-radius: 10px;
width: 76px;
height: 36px;
`;