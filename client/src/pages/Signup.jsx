import "../assets/CSS/signupStyle.css";
import signupImg from "../assets/images/signup.png";
import { Link } from "react-router-dom";

function Signup() {
    return ( 
        <>
        <section className="signup-wrapper">
            <div className="signup-container">
                <div className="left-section">
                    <img src={signupImg} alt="signupImg"/>
                </div>
                <div className="right-section">
                    <form>
                        <h2>Create an account</h2>
                        <div className="form-field">
                            <input type="text" placeholder="Full Name" name="fullname" className="login-field"/>
                        </div>
                        <div className="form-field">
                            <input type="email" placeholder="Enter your email" name="email" className="login-field"/>
                        </div>
                        <div className="form-field">
                            <input type="password" placeholder="Enter Password" name="password" className="login-field"/>
                        </div>
                        <div className="drop-down-field">
                            <div className="left-dropdown">
                                <label for="cars">Are you a : </label>
                                <select name="category" id="category">
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                </select>
                            </div>
                            <div className="right-dropdown">
                                <label for="cars">Gender : </label>
                                <select name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="profile-section">
                            <input type="file" name="profile" id="profile" />
                        </div>
                        <div className="button-section">
                            <button type="submit">Sign Up</button>
                        </div>
                        <p className="another-view">Already have an account? <Link to="/login" className="add-links">Login</Link></p>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}

export default Signup;