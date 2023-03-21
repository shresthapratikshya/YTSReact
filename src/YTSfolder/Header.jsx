import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <div className='logo-header'>
                    <img src='logo.jpg' alt='logo' className='logo' width="80px"></img>
                    <h2><b>YTSmovies</b></h2>
                </div>
                <Link to="/" className='sign-button'>SignIn</Link>
            </nav>
        </header>
    )
}
export default Header
