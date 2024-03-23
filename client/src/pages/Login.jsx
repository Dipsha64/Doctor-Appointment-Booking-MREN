import "../assets/CSS/loginStyle.css"
import { Link } from "react-router-dom"

function login() {
    return ( 
        <>
        <div className="login-container">
            <div className="login-section">
                <h2>Hello! <span>Welcome</span> Back</h2>
                {/* <h2 className="login-heading">Welcome</h2>
                <h2>Back</h2> */}
                <form>
                    <div className="form-field">
                        <input type="email" placeholder="Email" name="email" className="login-field"/>
                    </div>
                    <div className="form-field">
                        <input type="password" placeholder="Password" name="password" className="login-field"/>
                    </div>
                    <div className="button-section">
                        <button type="submit">Login</button>
                    </div>
                    <p className="another-view">Do you have account? <Link to="/register" className="add-links">Register</Link></p>
                </form>
            </div>
        </div>
        </>
    );
}

export default login;