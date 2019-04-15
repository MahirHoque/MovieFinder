import React, { useState, useEffect } from "react";
import Movie from "./Movie";

function MovieListings() {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  let apiKey = "d8a66e6cc19ca68955e8138cdce81aaa";
  let url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2019&sort_by=release_date.asc&page=${page}&api_key=${apiKey}`;
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setMovieData(movieData.concat(response.results));
        if (page < 83) {
          setPage(page + 1);
        }
      });
  }, [page]);
  const movieList = movieData.map(movie =>
    movie.popularity < 10 ? null : (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        tagline={movie.overview}
      />
    )
  );

  return (
    <div>
      <h1 className="intro">New Releases & Upcoming Movies</h1>
      <div className="itemContainer">{movieList}</div>
      <button onClick={() => setPage(page + 1)} className="viewMore">
        View More
      </button>
    </div>
  );
}

export default MovieListings;
