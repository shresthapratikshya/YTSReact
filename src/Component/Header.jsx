import React from 'react'
// import { Link } from 'react-router-dom'
import "../Css/Header.css";

const Header = () => {
    // const [searchTitle, setSearchTitle] = useState();

    return (
        <header>
            <nav className='nav'>
                <div className='logo-header'>
                    <img src='logo.jpg' alt='logo' className='logo' width="80px"></img>
                    <h2><b>YTSmovies</b></h2>
                    {/* <input type="text" placeholder='Search here' className='search-bar' 
                    onChange={e => setSearchTitle(e.target.value)}></input> */}
                </div>
                {/* <Link to={`display/${searchTitle}`} className='search-button'>Search</Link> */}
            </nav>
        </header>
    )
}
export default Header
