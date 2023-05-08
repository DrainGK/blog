import React from 'react';
import "./post.css"

const Post = () => {
    return (
        <div className='post'>
            <img
            className='post-image'
             src="https://hips.hearstapps.com/hmg-prod/images/outdoor-pull-ups-royalty-free-image-1572876774.jpg?crop=0.896xw:0.808xh;0.0374xw,0.115xh&resize=1200:*" 
             alt="workout image" />
             <div className="post-info">
                <div className="post-categories">
                    <span className="post-category">Music</span>
                    <span className="post-category">Life</span>
                </div>
                    <span className="post-title">Lorem Ipsum sum sum</span>

                <hr />
                <span className="post-date">1 houre ago</span>
             </div>
             <p className="post-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, ad quia sit quaerat fugiat quas velit maxime neque sunt cumque suscipit repellat debitis libero consectetur culpa, accusamus rem, quam ipsam!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, ad quia sit quaerat fugiat quas velit maxime neque sunt cumque suscipit repellat debitis libero consectetur culpa, accusamus rem, quam ipsam!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, ad quia sit quaerat fugiat quas velit maxime neque sunt cumque suscipit repellat debitis libero consectetur culpa, accusamus rem, quam ipsam!
             </p>
        </div>
    );
};

export default Post;