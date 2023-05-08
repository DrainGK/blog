import React from 'react';
import "./singlepost.css"

const SinglePost = () => {
    return (
        <div className='single-post'>
            <div className="single-post-wrapper">
                <img 
                src="https://hips.hearstapps.com/hmg-prod/images/outdoor-pull-ups-royalty-free-image-1572876774.jpg?crop=0.896xw:0.808xh;0.0374xw,0.115xh&resize=1200:*" 
                alt="Oui" 
                className='single-post-image'/>
                <h1 className="single-post-title">
                    Lorem Ispum Pumpulum Gudum
                    <div className="single-post-edit">
                        <i className="single-post-icon far fa-edit"></i>
                        <i className="single-post-icon far fa-trash-alt"></i>
                    </div>
                </h1>
                    <div className="single-post-info">
                        <span className="single-post-author">
                            Author: <b>Chad</b>
                        </span>
                        <span className="single-post-date">1 hour ago</span>
                    </div>
                    <p className='single-post-decription'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat tempora porro, nostrum assumenda nemo deserunt eligendi, omnis esse dolorem, ipsa perferendis odit non culpa hic veritatis quia neque commodi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat tempora porro, nostrum assumenda nemo deserunt eligendi, omnis esse dolorem, ipsa perferendis odit non culpa hic veritatis quia neque commodi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat tempora porro, nostrum assumenda nemo deserunt eligendi, omnis esse dolorem, ipsa perferendis odit non culpa hic veritatis quia neque commodi.
                    </p>
            </div>
        </div>
    );
};

export default SinglePost;