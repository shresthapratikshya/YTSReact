import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Details = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    console.log(location);
    const id = location.state.data;
    console.log(id);

    const detailed =useEffect(()=>{
       getApi();
    },[]);

    async function getApi(){
        try {
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(response=>response.json())
            .then(data=>
                setMovieDetails(data.data.movie));
        } catch (error) {
            
        }
    }

    return (
        <div className='movie-details'>
            <div className='detail-title'>{movieDetails.title}</div>
            <div className='detail-cover'>
                <img src={movieDetails.medium_cover_image}></img>
            </div>
            <div className='movie-year'>{movieDetails.year}</div>
            <div className='movie-description'>{movieDetails.description_intro}</div>
        </div>
    )
}
export default Details