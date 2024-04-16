/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

function Modal({ children, isOpen, onClose }: { children: React.ReactNode }) : JSX.Element {
  if (!isOpen) {
     return null;
  }
 
  return (
     <div style={{
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       backgroundColor: '#fff',
       padding: '20px',
       borderRadius: '10px',
       zIndex: 1000,
       boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
     }}>
       <div>{children}</div>
       <button onClick={onClose}>Закрыть</button>
     </div>
  );
 }
 
 export default Modal;