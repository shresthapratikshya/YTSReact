import React, { useEffect, useState } from "react";
import "../Css/Home.css";
// import Layout from './Layout';
import { Link } from "react-router-dom";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchTitle, setSearchTitle] = useState();

  async function getApi() {
    try {
      fetch(`https://yts.mx/api/v2/list_movies.json`)
        .then((response) => response.json())
        .then((res) => {
          setMovieData(res.data.movies);
          console.log(res.data.movies);
        });
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(()=>{
  //   getApi();
  // },[])

  useEffect(() => {
    if (searchTitle === "") {
      getApi();
    } else {
      const filteredMovies = movieData.filter((movie) =>
        movie.title.includes(searchTitle)
      );
      setMovieData(filteredMovies);
    }
  }, [searchTitle]);

  return (
    <div className="main-content">
      <div className="movie-list">
        <div className="title-searchBar">
          <h1 className="home-title">NOW PLAYING on YTSmovies</h1>
          <input
            type="text"
            placeholder="Search here"
            className="search-titleBar"
            onChange={(e) => setSearchTitle(e.target.value)}
          ></input>
        </div>

        <hr></hr>
        {movieData &&
          movieData.map(({ id, medium_cover_image, title, genres }) => {
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
