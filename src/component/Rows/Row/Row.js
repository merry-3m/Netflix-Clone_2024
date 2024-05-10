import React, { useEffect, useState } from 'react'
import axios from "../../../Utils/axios"
import "./row.css"

// # we are passing title,fetchUrl,isLargeRow as a props
const Row = ({title,fetchUrl,isLargeRow}) => {

    // ` We prepare a state to store the movie data that we get from the API
    const [movies, setMovies] = useState([])
    
    // ## useEffect is used here to make an HTTP request   when this component mounts and then it will  update  the movies in our state whenever there is any change in fetchUrl or isLargeRow value.

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(fetchUrl);
            // console.log(response);
            setMovies(response.data.results);
            // return response
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [fetchUrl]);
    //   console.log(movies);

    // `
    const base_url = 'https://image.tmdb.org/t/p/original';

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row_posters">
  {movies?.map((movie, i) => (
    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
      <img
        // onClick={() => handleClick(movie)}
        key={i}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
        className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
      />
    )
  ))}
</div>


    </div>
  )
}

export default Row