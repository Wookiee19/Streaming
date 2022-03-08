import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { Link } from 'react-router-dom';
import LiveTvIcon from '@material-ui/icons/LiveTvOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './Header.css';
import requests from './requests';
import Search from './Search';

function Header({ setSelectedOption }) {
    const decoration = {
        textDecoration: "none",
        color: "white"
    }
    
    return (
        <div className="header">
            <div className="header__icons">
            <h3 className="logo1">Cloven Entertainment</h3>
                <Link to="/" style={decoration}>
                    <div className="header__icon header__icon--active"  onClick={() => setSelectedOption(requests.fetchTrending)}>
                        <HomeIcon/>  
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/" style={decoration}>
                    <div className="header__icon" onClick={() => setSelectedOption(requests.fetchPopularMovies)}>
                        <FlashOnIcon/> 
                        <p>Popular</p>
                    </div>
                </Link>
                <Link to="/" style={decoration}>
                    <div className="header__icon" onClick={() => setSelectedOption(requests.fetchPopularShows)}>
                        <LiveTvIcon/>  
                        <p>TV Shows</p> 
                    </div>
                </Link>
                {/* <Link to="/account" style={decoration}>
                    <div className="header__icon">
                        <PersonOutlineIcon/>
                        <p>Account</p>
                    </div>
                </Link> */}
                <Search className="search__icon" setSelectedOption={setSelectedOption}/>
            </div>
            
                <h1 className="logo">Cloven Entertainment</h1>
                
            
        </div>
    )
}

export default Header
