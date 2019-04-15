import React, { useEffect, useState } from "react";

function Movie(props) {
  /*
  const [movieDetails, setMovieDetails] = useState({});
  let movieUrl = `https://api.themoviedb.org/3/movie/${
    props.id
  }?api_key=d8a66e6cc19ca68955e8138cdce81aaa`;
  function handleclick() {
    fetch(movieUrl)
      .then(response => response.json())
      .then(response => {
        setMovieDetails(response);
        console.log(movieDetails);
      });
      
  }
  */
  return (
    <div /*onClick={() => handleclick()}*/ className="movieCard">
      <div className="overlay">View Details</div>
      {/*
      <div className="movieDetails">
        <div>{movieDetails.overview}</div>
        <div>{movieDetails.runtime}</div>
        <div>{movieDetails.tagline !== "" && movieDetails.tagline}</div>
      </div>
      */}
      <div className="movieTitle">{props.title}</div>
      <img src={props.poster} />
    </div>
  );
}

export default Movie;
