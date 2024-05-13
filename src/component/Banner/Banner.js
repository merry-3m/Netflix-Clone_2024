import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from "../../Utils/axios"
// import requests from '../../Utils/requests'
import requests from '../../Utils/Request'
const Banner = () => {
  // ` fetch movie from TMDB 

  const[movie,setMovie] = useState([])

  useEffect(()=>{
   (async()=>{
    // # we are concatenating the base url from axios with request
    const request = await axios.get(requests.fetchNetflixOriginals)
    setMovie(
      request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
    )
   })()

  },[])
// console.log(movie);

// ` We use function to truncate the description

function truncate(str,n){
  return str?.length > n ? str.substr(0,n-1)+"..." : str
}

  return (
    <div className ="banner"
    style = {{
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      backgroundSize : "cover",
      backgroundPosition : "center center"
    }}>

     <div className ="banner_contents">
      <h1 className="banner_title">{movie?.title ||  movie?.name || movie?.original_name}</h1>
      <div className="banner_buttons">
        <button className="banner_button play">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">
      {truncate(movie?.overview, 150)}
        
        </h1>
     </div>

     <div className="banner_fadeBottom"/>

    </div>
  )
}

export default Banner