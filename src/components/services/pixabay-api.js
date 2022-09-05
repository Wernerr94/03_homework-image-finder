import axios from 'axios';

async function getImages(value, pageNum = 1) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${value}&page=${pageNum}&key=29054991-7d8f8918265bc952ed942e121&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
const api = { getImages };

export default api;
