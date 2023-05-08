import { Link } from "react-router-dom";
import "./register.css"

const Register = () => {
    return (
        <div className='register'>
            <span className="register-title">register</span>
            <form className="register-form">
                <label>User name</label>
                <input className="register-input" type="text" placeholder="Enter your user name" />
                <label>Email</label>
                <input className="register-input" type="text" placeholder="Enter your email" />
                <label>Password</label>
                <input className="register-input" type="password" placeholder="Enter your password" />
                <button className="register-button">register</button>
                <button className="login-button">
                    <Link className="link" to="/login">
                        Login
                    </Link>
                </button>
            </form>
        </div>
    );
};

export default Register;