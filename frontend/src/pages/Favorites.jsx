import React from "react";
import "../css/favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCards from "../components/MovieCards";
const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCards movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorites Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear her</p>
    </div>
  );
};

export default Favorites;
