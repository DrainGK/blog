import React from 'react';
import { Link } from 'react-router-dom';
import "./topbar.css";
import { useContext } from "react";
import { Context } from '../../context/Context';

const TopBar = () => {
    const { user, dispatch } = useContext(Context);
    const publicFolder = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className='top'>
           <div className="top-left">
            {user && <span>Bienvenue {user.username}</span>}
           </div>
           <div className="top-center">
            <ul className="toplist">
                <li className='toplist-item'><Link className="link" to="/">Home</Link></li>
                <li className='toplist-item'><Link className="link" to="/">About</Link></li>
                <li className='toplist-item'><Link className="link" to="/">Contact</Link></li>
                <li className='toplist-item'><Link className="link" to="/write">Write</Link></li>
                <li className='toplist-item' onClick={handleLogout}>{user && "Logout"} </li>
            </ul>
           </div>
           <div className="top-right">
            {
                user ? (
                    <Link className='link' to="/setting">
                        <img src={publicFolder+user.profilePic} alt="PP" className="top-img" />
                    </Link>
                ):(
                    <ul className='toplist'>
                        <li className='toplist-item'>
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className='toplist-item'>
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )
            }
            <i className="search-icon fas fa-search"></i>
           </div>
        </div>
    );
};

export default TopBar;