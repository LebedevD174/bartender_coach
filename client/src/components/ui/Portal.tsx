/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { ReactNode } from 'react'; 
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: { children: ReactNode }) => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
       throw new Error('Modal root element not found');
    }
    return ReactDOM.createPortal(children, modalRoot);
   };

export default ModalPortal;
