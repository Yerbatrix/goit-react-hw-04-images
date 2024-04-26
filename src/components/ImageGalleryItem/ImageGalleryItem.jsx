import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <div className={css.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        className={css.ImageGalleryItemImage}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageGalleryItem;
