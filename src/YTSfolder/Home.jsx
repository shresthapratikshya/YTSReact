import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movieData, setMovieData] = useState([]);


    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/list_movies.json`)
        .then(response=> response.json())
        .then(res=> {setMovieData(res.data.movies)
            console.log("HELLO");
        })
        
    },[]);
    // useEffect(() => {
    //     console.log("HELLO");
    //     fetch(`https://yts.mx/api/v2/list_movies.json`)
    //         .then(response => response.json())
    //         .then(res => {
    //             setMovieData(res.data.movies);
    //             // console.log(res.data.movies);
    //         }).catch(error => {
    //             console.log("Error has occured ", error);
    //         })
    //         //eslint-disable-next-line
    // }, []);


    return (
        // <Layout>
        <div className='main-content'>
            <div className='movie-list'>
                <h1>NOW PLAYING on YTSmovies</h1>
                <hr></hr>
                {movieData && movieData.map((movies) => {
                    return <div className="movie-cover" key={movies.id}>
                        <img src={movies.medium_cover_image} alt="Movie cover"></img>
                        <div className='movie-title'>{movies.title}</div>
                        <h5>{movies.genres}</h5>
                        <Link to="details" state={{ data: movies.id }}
                            className="button">Details</Link>
                    </div>
                })}
            </div>
        </div>
        // </Layout>
    )
}

export default Home
