import { useContext, useState } from 'react';
import SideBar from '../../components/sideBar/SideBar';
import "./setting.css";
import { Context } from '../../context/Context';
import axios from 'axios';

const Setting = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false)
    const {user, dispatch } = useContext(Context);
    const publicFolder = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username, email, password
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;

            try{
                await axios.post("http://localhost:5000/api/upload", data);
            } catch (err){}
        }
        try{
            const res = await axios.put("http://localhost:5000/api/user/"+user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS", payload: res.data})
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"})
        }
    }

    return (
        <div className='settings'>
            <div className="setting-wrapper">
                <div className="setting-title">
                    <span className="setting-update-title">Update Account</span>
                    <span className="setting-delete-title">Delete Account</span>
                </div>
                <form className="setting-form" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="setting-profilepicture">
                        <img src={file ? URL.createObjectURL(file) : publicFolder+user.profilePic} 
                        alt="profile picture" />
                        <label htmlFor="fileInput">
                            <i className='setting-profilepicture-icon far fa-user-circle'></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}
                        onChange={e=>setFile(e.target.files[0])} />
                    </div>
                    <label> Username</label>
                    <input type="text" placeholder={user.username}  onChange={e=>setUsername(e.target.value)} />
                    <label> Email</label>
                    <input type="email" placeholder={user.email} 
                    onChange={e=>setEmail(e.target.value)}/>
                    <label> Password</label>
                    <input type="password"  onChange={e=>setPassword(e.target.value)}/>
                    <button className="setting-submit" type="submit">Update</button>
                    {success && <span style={{color: "teal"}}>Profile has been updated</span>}
                </form>
            </div>
            <SideBar />
        </div>
    );
};

export default Setting;