import React from 'react';
import "./write.css"

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImage' src="https://hips.hearstapps.com/hmg-prod/images/outdoor-pull-ups-royalty-free-image-1572876774.jpg?crop=0.896xw:0.808xh;0.0374xw,0.115xh&resize=1200:*" alt="" />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="write-form-group">
                    <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
};

export default Write;