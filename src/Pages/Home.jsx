import React, { useEffect, useState } from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  async function getApi() {
    try {
      await fetch(`https://yts.mx/api/v2/list_movies.json`)
        .then((response) => response.json())
        .then((res) => {
          setMovieData(res.data.movies);
          setFilterData(res.data.movies);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  // useEffect(() => {
  //   if (searchTitle === "") {
  //     getApi();
  //   } else {
  //     const filteredMovies = movieData.filter((movie) =>
  //       movie.title.includes(searchTitle)
  //     );
  //     setMovieData(filteredMovies);
  //   }
  // }, [searchTitle]);

  const searchMovies = (event) => {
    if (!event.target.value) return getApi();

    const filteredMovies = movieData.filter((movie) =>
      movie.title.includes(event.target.value)
    );
    setFilterData(filteredMovies);
  };

  return (
    <div className="main-content">
      <div className="movie-list">
        <div className="title-searchBar">
          <h1 className="home-title">NOW PLAYING on YTSmovies</h1>
          <input
            type="text"
            placeholder="Search here"
            className="search-titleBar"
            onChange={searchMovies}
          ></input>
        </div>

        <hr></hr>
        {filterData &&
          filterData.map(({ id, medium_cover_image, title, genres }) => {
            return (
              <div className="movie-cover" key={id}>
                <img src={medium_cover_image} alt="Movie cover"></img>
                <div className="title">{title}</div>
                <h5>{genres.join(",")}</h5>
                <Link to={`details/${id}`} className="button">
                  Details
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
