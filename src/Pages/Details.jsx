import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Css/Details.css';
const Details = () => {
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(()=>{
       getApi();
    },[]);

    const {id} =useParams();
    async function getApi(){
        try {
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(response=>response.json())
            .then(data=>
                setMovieDetails(data.data.movie));
        } catch (error) {
            console.error(error);
        }
    }
    const {title, medium_cover_image, year, description_intro} = movieDetails;

    return (
        <div className='movie-details'>
            <div className='detail-title'>{title}</div>
            <div className='detail-cover'>
                <img src={medium_cover_image} alt={title}></img>
            </div>
            <div className='movie-year'>{year}</div>
            <div className='movie-description'>{description_intro}</div>
        </div>
    )
}
export default Details