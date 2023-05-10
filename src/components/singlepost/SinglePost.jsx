import React, { useContext, useEffect, useState} from 'react';
import "./singlepost.css"
import {Link, useParams } from 'react-router-dom';
import axios from "axios"
import {Context} from "../../context/Context"

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})
    const publicFolder = "http://localhost:5000/images/"
    const {user} = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [categories, setCategories] = useState("")
    const [file, setFile] = useState(null);
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(()=> {
        const getPost = async ()=> {
            const res = await axios.get("http://localhost:5000/api/post/");
            const postFiltered = res.data.filter((item) => item._id === id);
            setPost(postFiltered[0]);
            setTitle(postFiltered[0].title)
            setDesc(postFiltered[0].desc)
            setCategories(postFiltered[0].categories)
            setFile(postFiltered[0].photo)
        };
        getPost();
    }, [id]);

    const handleDelete = async()=>{

        try{
         await axios.delete(`http://localhost:5000/api/post/${post._id}`, {data: {username: user.username}});
         window.location.replace("/")
        } catch(err){}
    }

    const handleUpdate = async () => {
        const updatedPost = {
            username: user.username,
            title,
            desc,
            categories,
            file,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedPost.photo = filename;

            try{
                await axios.post("http://localhost:5000/api/upload", data)
            } catch (err){}
        }
        try{
            await axios.put(`http://localhost:5000/api/post/${post._id}`, updatedPost);
            setUpdateMode(false);
            window.location.replace("/")
           } catch(err){}
        }

    return (
        <div className='single-post'>
            <div className="single-post-wrapper">
                {post.photo && 
                <img
                    src={publicFolder + post.photo}
                    alt={post.title}
                    className='single-post-image' />
                }{
                    updateMode ? <input className="single-post-title-input" type="text" value={title} autoFocus
                    onChange={(e) => setTitle(e.target.value)}/> : (

                        
                        <h1 className="single-post-title">
                    {title}
                    {post.username === user?.username &&
                    <div className="single-post-edit">
                        <i className="single-post-icon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                        <i className="single-post-icon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                     }
                </h1>
                     )
                    }
                    <div className="single-post-info">
                        <span className="single-post-author">
                            <Link className='link' to={`/?user=${post.username}`}>
                                Author: <b>{post.username}</b>
                            </Link>
                        </span>
                        <span className="single-post-date">{new Date(post.createdAt).toDateString()}</span>
                        
                        {updateMode ? (
                            <>
                        <select name="categories" id="categories" 
                        onChange={e=>setCategories(e.target.value)}>
                            <option value="laptop">laptop</option>
                            <option value="gaming">gaming</option>
                            <option value="bureau">bureau</option>
                            <option value="apple">apple</option>
                            <option value="site">site</option>
                        </select>
                        <label htmlFor="categories"> categories</label>
                        </>
                    ):(
                        <select name="categories" id="categories">
                        <option value={post.categories}>{post.categories}</option>
                    </select>
                        )}
                    <label htmlFor="categories"> categories</label>
                    </div>
                    {updateMode ? (
                        <textarea className='single-post-decription-input' value={desc} onChange={(e) => setDesc(e.target.value)} />
                    ):(

                        <p className='single-post-decription'>
                        {desc}
                    </p>
                        )}
                        {updateMode &&
                            <button className="update-button" onClick={handleUpdate}>Update</button>
                        }

                        {updateMode &&
                        <div className="write-form-group">
                            <label htmlFor="fileInput">
                                <i className='writeIcon fas fa-image'></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}}
                            onChange={e=>setFile(e.target.files[0])} />
                        </div>
                        }
            </div>
        </div>
    );
};

export default SinglePost;