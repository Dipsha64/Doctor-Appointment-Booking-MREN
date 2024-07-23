import "../assets/CSS/loginStyle.css"
import signupImg from "../assets/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from "react-redux";
// import { loginAsyncSlice } from "../features/auth/authSlice";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("ERR",errors);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleLogin = (data) => {
        console.log("data..." ,data);
        // dispatch(loginAsyncSlice(data)).then((res)=>{
        //     console.log("RESSSSSSSS LOGIN",res);
        // })
    }
    const toastOption = {
        position : "top-right",
        autoClose : 8000,
        pauseOnHover : true,
        theme : "dark",
        draggable : true
    }

    return ( 
        <>
        <section className="signup-wrapper">
            <div className="signup-container">
                <div className="left-section">
                    <img src={signupImg} alt="signupImg"/>
                </div>
                <div className="right-section">
                    <form noValidate onSubmit={handleSubmit(handleLogin)}>
                        <h2>Welcome to Login</h2>
                        <div className="form-field">
                            <input type="email" placeholder="Enter your email" name="email" className="login-field"
                                {...register("email",{ required : "Email is required.",pattern : {value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,message : "Email not valid"}})}/>
                        </div>
                        <span className="text-red-500">
                            {errors.email && <span>{errors.email.message}</span>}
                        </span>
                        <div className="form-field">
                            <input type="password" placeholder="Enter Password" name="password" className="login-field"
                                {...register("password",{required : "Password is required.",pattern: {value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message: `at least 8 characters\n
                                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                                - Can contain special characters`}})}/>
                        </div>
                        <span className="text-red-500">
                            {errors.password && <span>{errors.password.message}</span>}
                        </span>
                        <div className="button-section">
                            <button>Login</button>
                        </div>
                        <p className="another-view">Create New Account <Link to="/register" className="add-links">Register</Link></p>
                    </form>
                </div>
            </div>
        </section>
        <ToastContainer/>
        </>
    );
}

export default Login;