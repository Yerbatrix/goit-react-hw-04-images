import React from 'react';
import css from './Modal.module.css';

const Modal = ({ onClose, largeImageUrl }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal} onKeyDown={handleKeyDown} tabIndex="0">
        <img src={largeImageUrl} alt="" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
