import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/Details.css";
import { Link } from "react-router-dom";
const Details = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieSuggestion, setMovieSuggestion] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getApi();
    getSuggestionApi();
  }, [id]);

  async function getSuggestionApi() {
    try {
      await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setMovieSuggestion(data.data.movies);
          console.log(data.data.movies);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function getApi() {
    try {
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((data) => setMovieDetails(data.data.movie));
    } catch (error) {
      console.error(error);
    }
  }

  const { title, medium_cover_image, year, description_intro } = movieDetails;

  return (
    <div>
      <div className="movie-details">
        <div className="detail-title">{title}</div>
        <div className="detail-cover">
          <img src={medium_cover_image} alt={title}></img>
        </div>
        <div className="movie-year">{year}</div>
        <div className="movie-description">{description_intro}</div>
      </div>
      <div className="movie-suggestion">
        <h2 id="movie-suggestTitle">Suggested Movies</h2>
        <hr></hr>
        <div className="suggested-list">
          {movieSuggestion &&
            movieSuggestion.map(({ id, title, medium_cover_image }) => {
              return (
                <div className="suggestion" key={id}>
                  <img src={medium_cover_image} alt="Movie cover"></img>
                  <div className="suggested-title">{title}</div>
                  <Link to={`../details/${id}`} className="button">
                    Details
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Details;
