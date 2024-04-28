import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ onClose, largeImageUrl }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDownEvent = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDownEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [onClose]);

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal} tabIndex="0">
        <img src={largeImageUrl} alt="" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
