function Modal({ children, onClose }) {
    return (
       <div style={modalStyle}>
         <button onClick={onClose}>Закрыть</button>
         <div>{children}</div>
       </div>
    );
   }
   
export default Modal;