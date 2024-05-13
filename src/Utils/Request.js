// frontend/src/api.js

const BASE_URL = 'http://localhost:3001/api'; // Assuming your backend server is running locally on port 3001

const requests = {
    fetchTrending: `${BASE_URL}/trending`,
    fetchNetflixOriginals: `${BASE_URL}/netflixOriginals`,
    fetchTopRated:`${BASE_URL}/topRated`,
    fetchActionMovies: `${BASE_URL}/actionMovies`,
    fetchComedyMovies:`${BASE_URL}/comedyMovies`,
    fetchHorrorMovies:`${BASE_URL}/horrorMovies`,
    fetchTvDrama: `${BASE_URL}/tvDrama`,
    fetchDocumentariesMovies: `${BASE_URL}/documentariesMovies`,
    fetchTvShows:`${BASE_URL}/tvShows`,
};

export default requests;
