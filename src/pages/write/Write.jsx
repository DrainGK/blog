import React, { useContext, useState } from 'react';
import "./write.css"
import axios from "axios"
import { Context } from "../../context/Context"

const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [categories, setCategories] = useState([]);
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try{
                await axios.post("http://localhost:5000/api/upload", data)
            } catch (err){}
        }
        try{
            const res = axios.post("http://localhost:5000/api/post", newPost);
            window.location.replace("/")
        }catch(err){}
    }

    return (
        <div className='write'>
            {file &&
                <img className='writeImage' src={URL.createObjectURL(file)} alt="" />
            }
            <form className="write-form" onSubmit={handleSubmit}>
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <i className='writeIcon fas fa-image'></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}  onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="write-form-group">
                    <select name="categories" id="categories" 
                    onChange={e=>setCategories(e.target.value)}>
                        <option value="laptop">laptop</option>
                        <option value="gaming">gaming</option>
                        <option value="bureau">bureau</option>
                        <option value="apple">apple</option>
                        <option value="site">site</option>
                    </select>
                    <label htmlFor="categories"> categories</label>
                </div>
                <div className="write-form-group">
                    <textarea placeholder='Tell your story...' type="text" className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
                </div>
                <button className='writeSubmit' type='submit'>Publish</button>
            </form>
        </div>
    );
};

export default Write;