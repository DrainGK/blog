import React from 'react';
import {Link} from "react-router-dom"
import "./post.css"

const Post = ({post}) => {
    const publicFolder = "http://localhost:5000/images/"
    return (
        <div className='post'>
            {post.photo && (
                <img 
                    className='post-image'
                    src={publicFolder + post.photo} alt={post.title}/>
            )}
             <div className="post-info">
                <div className="post-categories">
                    {post.categories.map((cat) => {
                        <span className="post-category">{cat.name}</span>
                    })}
                </div>

                <Link　className='link' to={`/post/${post._id}`}>
                    <span className="post-title">{post.title}</span>
                </Link>

                <hr />
                <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
             </div>
             <p className="post-description">
                {post.desc}
             </p>
        </div>
    );
};

export default Post;