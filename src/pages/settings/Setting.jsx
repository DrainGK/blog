import React from 'react';
import SideBar from '../../components/sideBar/SideBar';
import "./setting.css";

const Setting = () => {
    return (
        <div className='settings'>
            <div className="setting-wrapper">
                <div className="setting-title">
                    <span className="setting-update-title">Update Account</span>
                    <span className="setting-delete-title">Delete Account</span>
                </div>
                <form className="setting-form">
                    <label>Profile Picture</label>
                    <div className="setting-profilepicture">
                        <img src="data:image/jpeg;base64,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" 
                        alt="profile picture" />
                        <label htmlFor="fileInput">
                            <i className='setting-profilepicture-icon far fa-user-circle'></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label> Username</label>
                    <input type="text" placeholder='Chad' />
                    <label> Email</label>
                    <input type="email" placeholder='email@gmail.com' />
                    <label> Password</label>
                    <input type="password"/>
                    <button className="setting-submit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    );
};

export default Setting;