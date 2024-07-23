import "../assets/CSS/signupStyle.css";
import signupImg from "../assets/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadCloudinary from "../utils/uploadCloudinary";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ fileData, setFileData ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    console.log("ERR",errors);
    const navigate = useNavigate();

    const handleFileUpload = async (e) => {
        console.log("FILEEEEE", e.target.files);
        const imageData = e.target.files[0];
        const data = await uploadCloudinary(imageData);
        console.log("FILE DATAAAA" , data);
        setFileData(data.url);
    }

    const handleSignup = (data) => {
        data.photo = fileData;
        setLoading(true);
        axios.post(registerRoute,data).then((result)=>{
            console.log("result...." ,result);
            setLoading(false);
            if(result.data && result.data.status === true){
                toast(result.data.message,toastOption);
                navigate("/login");
            }
            else {
                toast(result.data.message,toastOption);
            }
        }).catch((error)=>{
            console.log(error);
        })
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
                    <form noValidate onSubmit={handleSubmit(handleSignup)}>
                        <h2>Create an account</h2>
                        <div className="form-field">
                            <input type="text" placeholder="Full Name" name="name" className="login-field"
                                {...register("name",{ required : "The Name is required."})}/>
                        </div>
                        <span className="text-red-500">
                            {errors.name && <span>{errors.name.message}</span>}
                        </span>
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
                        <div className="drop-down-field">
                            <div className="left-dropdown">
                                <label for="cars">Are you a : </label>
                                <select {...register("role")} name="category" id="category">
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                </select>
                            </div>
                            <div className="right-dropdown">
                                <label for="cars">Gender : </label>
                                <select {...register("gender")} name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="profile-section flex">
                            { fileData &&
                                <div className="w-[60px] h-[60px] rounded-full border-2 border-solid flex items-center justify-center">
                                    <img src={fileData} alt="profile-image" className="w-full rounded-full"/>
                                </div>
                            }
                            <div className="relative">
                                <input className="absolute pt-3 pl-2.5" type="file" name="profile" id="profile" onChange={handleFileUpload}/>
                                {/* <label className="absolute bg-[#5777d7] text-white w-40 rounded-full py-3 px-6">Upload Photo</label> */}
                            </div>
                        </div>
                        <div className={`button-section ${fileData ? '' : 'pt-10' }`}>
                            { !loading ? <button className="">Sign Up</button> : '' }
                            <ClipLoader
                                className=""
                                loading={loading}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                        <p className="another-view">Already have an account? <Link to="/login" className="add-links">Login</Link></p>
                    </form>
                </div>
            </div>
        </section>
        <ToastContainer/>
        </>
    );
}

export default Signup;