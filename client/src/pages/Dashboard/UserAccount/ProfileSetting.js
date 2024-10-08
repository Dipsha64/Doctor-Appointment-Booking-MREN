import "../../../assets/CSS/loginStyle.css"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { updateUser } from "../../../utils/APIRoutes";
import axios from "axios";
import { authorisedToken } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfileSetting({profileData}) {
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const loginToken = useSelector(authorisedToken);
    console.log("ERR",errors);
    console.log("profileData....Component" ,profileData);
    const [ formData, setFormData ] = useState({
        name : '',
        email : '',
        bloodType : '',
        gender : '',
    });
    const toastOption = {
        position : "top-right",
        autoClose : 8000,
        pauseOnHover : true,
        theme : "dark",
        draggable : true
    }

    useEffect(()=>{
        setFormData({
            name : profileData && profileData.name ? profileData.name : '',
            email : profileData && profileData.email ? profileData.email : '',
            bloodType : profileData && profileData.bloodType ? profileData.bloodType : '',
            gender : profileData && profileData.gender ? profileData.gender : '',
        });
        setValue("name",profileData.name ? profileData.name : '');
        setValue("email",profileData.email ? profileData.email : '');
        setValue("bloodType",profileData.bloodType ? profileData.bloodType : '');
        setValue("gender",profileData.gender ? profileData.gender : '');
    },[])
    const updateProfile = (data) => {
        axios.put(updateUser+profileData._id,data,{
            headers : {
                'Authorization': 'Bearer ' + loginToken
            }
        })
        .then((result)=>{
            console.log("result......" ,result);
            toast(result.data.message, toastOption);
        })
        .catch((error)=>{
            console.log(error);
            toast(error.response.data.message, toastOption);
        })
    }

    return ( 
        <>
        <div>
        <form noValidate onSubmit={handleSubmit(updateProfile)}>
            <div className="form-field">
                <input type="text" placeholder="Enter your name" name="name" className="login-field"
                    {...register("name",{ required : "Name is required."})}/>
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
                <input type="text" placeholder="Enter Blood type" name="bloodType" className="login-field"
                    {...register("bloodType")}/>
            </div>
            <div className="drop-down-field">
                <div className="left-dropdown">
                    <label for="cars">Gender : </label>
                    <select {...register("gender")} name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <div>
                <button className="bg-[#5777d7] text-white p-2 mt-8 px-5 rounded-full font-semibold text-[16px] leading-7 border border-solid">Update Profile</button>
            </div>
            <p className="another-view">Create New Account <Link to="/register" className="add-links">Register</Link></p>
        </form>
        </div>
        <ToastContainer/>
        </>
    );
}

export default ProfileSetting;