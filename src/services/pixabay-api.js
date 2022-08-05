// KEY: 29054991-7d8f8918265bc952ed942e121
//  baseURL: https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
import axios from 'axios';
// axios.defaults.baseURL = `https://pixabay.com/api/?q=${value}&page=1&key=29054991-7d8f8918265bc952ed942e121&image_type=photo&orientation=horizontal&per_page=12`

async function getImages(value, pageNum = 1) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${value}&page=${pageNum}&key=29054991-7d8f8918265bc952ed942e121&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
}
const api = { getImages };

export default api;
