// import React,{useEffect, useState} from 'react'
// import { useParams, Link } from 'react-router-dom';

// const Display = () => {
//     const [movieDisplay, setMovieDisplay] = useState("");

//     const {displayTitle} = useParams();
    
//     useEffect(()=>{
//         fetch(`https://yts.mx/api/v2/list_movies.json`)
//         .then(response=> response.json())
//         .then(res=> {
//             const filteredMovies = res.data.movies.filter((movie)=>
//             movie.title.includes(displayTitle));
//             // console.log(displayTitle.toString());
//             console.log(typeof(displayTitle));
//             setMovieDisplay(filteredMovies);
//             // console.log(filteredMovies);
//         })
//     },[displayTitle]);

//   return (
//     <div className='main-content'>
//             <div className='movie-list'>
//                 <h1>NOW PLAYING on YTSmovies</h1>
//                 <hr></hr>
//                 {movieDisplay && movieDisplay.map(({id, medium_cover_image, title, genres}) => {
//                     return <div className="movie-cover" key={id}>
//                         <img src={medium_cover_image} alt="Movie cover"></img>
//                         <div className='movie-title'>{title}</div>
//                         <h5>{genres.join(',')}</h5>
//                         <Link to={`details/${id}`} className="button">Details</Link>
//                     </div>
//                 })}
//             </div>
//     </div>
//   )
// }

// export default Display
