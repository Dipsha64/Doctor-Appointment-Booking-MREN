import { useSelector } from "react-redux";
import { isAuthenticated, authorisedToken } from "../../../features/auth/authSlice";
import { useState, useEffect } from "react";
import MyBooking from "./MyBooking";
import ProfileSetting from "./ProfileSetting";
import { getUserProfile, getUserAppointment } from "../../../utils/APIRoutes";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {
    const loginUser = useSelector(isAuthenticated);
    const loginToken = useSelector(authorisedToken);
    const [tab, setTab] = useState("booking");
    const [ profileData, setProfileData ] = useState([]);
    const [ appointmentData, setAppointmentData ] = useState([]);

    const toastOption = {
        position : "top-right",
        autoClose : 8000,
        pauseOnHover : true,
        theme : "dark",
        draggable : true
    }

    const getProfileData = () => {
        axios.post(getUserProfile, {id:loginUser.id}, {
            headers: {
                'Authorization': 'Bearer ' + loginToken
            }
        })
        .then((res)=>{
            console.log("GET USER PROFILE DATA",res.data.data);
            if(res.data && res.data.status === true){
                setProfileData(res.data.data);
            }
        }).catch((error)=>{
            console.log(error);
            toast(error.response.data.message, toastOption);
        })
    }
    const getAppointmentData = () => {
        axios.post(getUserAppointment,{id : loginUser.id},{
            headers : {
                'Authorization': 'Bearer ' + loginToken
            }
        })
        .then((res)=>{
            if(res.data && res.data.status === true){
                console.log("res.data ...." , res.data);
                setAppointmentData(res.data.data);
            }
        })
        .catch((error)=>{
            console.log(error);
            // toast(error.response.data.message, toastOption);
        })
    }

    useEffect(()=>{
        getProfileData();
        getAppointmentData();
    },[])
    return ( 
        <>
        <div className="max-w-[1170px] px-5 pt-12 mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md">
                    <div className="flex justify-center items-center">
                        <img src={loginUser.photo} alt="" className="w-[100px] h-[100px] rounded-full"/>
                    </div>
                    <div className="text-center mt-4">
                        <h3 className="text-[18px] leading-[30px] font-bold">{loginUser.name}</h3>
                    </div>
                    <div className="mt-[100px] w-full">
                        <button className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">Logout</button>
                        <button className="w-full mt-[20px] bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">Logout</button>
                    </div>
                </div>

                <div className="md:col-span-2 md:px-[30px]">
                    <div>
                        <button onClick={() => setTab("booking")} className={`${tab === "booking" ? 'bg-[#f72585] text-white' : '' } p-2 mr-5 px-5 rounded-full font-semibold text-[16px] leading-7 border border-solid`}>My Booking</button>
                        <button onClick={() => setTab("setting")} className={`${tab === "setting" ? 'bg-[#f72585] text-white' : '' } p-2 px-5 rounded-full font-semibold text-[16px] leading-7 border border-solid`}>Profile Setting</button>
                    </div>
                    {
                        tab === "booking" && <MyBooking appointmentData={appointmentData} />
                    }
                    {
                        tab === "setting" && <ProfileSetting profileData={profileData} />
                    }
                </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    );
}

export default MyAccount;