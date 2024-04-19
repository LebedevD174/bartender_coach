/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';

function Modal({
 children,
 isOpen,
 onClose,
}: {
 children: React.ReactNode;
 isOpen: boolean;
 onClose: () => void;
}): JSX.Element | null {
 useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    const modalWindow = document.querySelector('.ModalWindow');
    
    if (modalRoot) {
      if (!isOpen) {
        modalRoot.style.zIndex = "-1"; 
      } else {
        modalRoot.style.zIndex = '1000'; 
      }
    }
    if (modalWindow) {
      if (!isOpen) {
        modalWindow.style.zIndex = "-1"; 
      } else {
        modalWindow.style.zIndex = '1000'; 
      }
    }
    
 }, [isOpen]); 

 if (!isOpen) {
    return null;
 }

 return (
    <>
      <div className='blur'></div>
      <div className="ModalWindow">
        <div className='modalerror'>{children}</div>
        <button className="btn-back" onClick={onClose}>
          <p>Закрыть</p>
        </button>
      </div>
    </>
 );
}

export default Modal;
