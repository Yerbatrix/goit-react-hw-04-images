import axios from 'axios';

const API_KEY = '42529634-f4ee0a007b87bc585b0bc2cb3';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};

export default fetchImages;
