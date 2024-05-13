import React from 'react'
import Row from '../Row/Row'
// import requests from '../../../Utils/requests'
import requests from '../../../Utils/Request'

console.log(requests);

const RowList = () => {
  return (
    <>
   
    <Row
     fetchUrl={requests.fetchNetflixOriginals}
     title='Netflix Original'
     isLargeRow />
   <Row
     fetchUrl={requests.fetchActionMovies}
     title='Action Movies '
     isLargeRow />
   <Row
     fetchUrl={requests.fetchComedyMovies}
     title='Comedy Movies'
     isLargeRow />
   <Row
     fetchUrl={requests.fetchHorrorMovies}
     title='Horror Movies'
     isLargeRow />
   <Row
     fetchUrl={requests.fetchTvDrama}
     title='Tv Drama'
     isLargeRow />
   <Row
     fetchUrl={requests.fetchTopRated}
     title='TopRated Movies'
     isLargeRow />
   <Row
     fetchUrl={requests.fetchTrending}
     title='Trending'
     isLargeRow />
   <Row
     fetchUrl={requests.fetchDocumentariesMovies}
     title='Documentaries Movies'
     isLargeRow />
   <Row
     fetchUrl={requests.fetchTvShows}
     title='Tv Shows'
     isLargeRow />
   
   
   
   </>
  )
}

export default RowList