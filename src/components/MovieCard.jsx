import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("Favorite card has been clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♡ Favorite
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
