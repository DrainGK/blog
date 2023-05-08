import React from 'react';
import "./sidebar.css"

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-item">
                <span className="sidebar-title">About Me</span>
                <img src="https://storage.googleapis.com/dream-machines-output/581d68f4-5b45-4df9-8c55-09ec56bbbde3/0_0.png" width="159px" height="150px" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum dignissimos, repudiandae </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Categories</span>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            life
                        </li>
                        <li className="sidebar-list-item">
                            Music
                        </li>
                        <li className="sidebar-list-item">
                            Style
                        </li>
                        <li className="sidebar-list-item">
                            Sport
                        </li>
                        <li className="sidebar-list-item">
                            Tech
                        </li>
                        <li className="sidebar-list-item">
                            Cinema
                        </li>
                    </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Follow Us</span>
                <div className="sidebar-social">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;