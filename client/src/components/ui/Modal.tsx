/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

function Modal({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element | null {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className='blur'></div>
      <div className="ModalWindow">
        <div>{children}</div>
        <button className="btn-back" onClick={onClose}>
          <p>Закрыть</p>
        </button>
      </div>
    </>
  );
}

export default Modal;
