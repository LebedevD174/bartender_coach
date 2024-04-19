/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children, isOpen }: { children: ReactNode }) => {
console.log(isOpen);

    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
       throw new Error('Modal root element not found');
    } else {
      if  ( isOpen)  modalRoot.style.zIndex = '1'
      else  modalRoot.style.zIndex = '-1'
    }
    return ReactDOM.createPortal(children, modalRoot);
   };

export default ModalPortal;
