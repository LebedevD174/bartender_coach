import React from 'react';

function Modal({ message, onClose }) :JSX.Element {
 if (!message) {
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
      <button onClick={onClose}>Закрыть</button>
      <div>{message}</div>
    </div>
 );
}

export default Modal;