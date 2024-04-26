import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import css from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageUrl, setLargeImageUrl] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=42529634-f4ee0a007b87bc585b0bc2cb3&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = largeImageUrl => {
    setLargeImageUrl(largeImageUrl);
  };

  const handleCloseModal = () => {
    setLargeImageUrl(null);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSubmit} />
      {error && <p>Error: {error.message}</p>}
      <ImageGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => handleImageClick(image.largeImageURL)}
          />
        ))}
      </ImageGallery>
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
      {largeImageUrl && (
        <Modal onClose={handleCloseModal} largeImageUrl={largeImageUrl} />
      )}
    </div>
  );
};

export default App;
