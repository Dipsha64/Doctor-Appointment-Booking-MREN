import { useEffect, useState } from "react";
import DoctorAbout from "./DoctorAbout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getSingleDoctor, getBookingSession } from "../../utils/APIRoutes";
import { useSelector } from "react-redux";
import { authorisedToken } from "../../features/auth/authSlice";
import DoctorFeedback from "./DoctorFeedback";
import starImage from "../../assets/images/Star.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DoctorDetails() {
    const [ tab, setTab ] = useState("about");
    const { id } = useParams();
    const [ profileData, setProfileData ] = useState({});
    const loginToken = useSelector(authorisedToken);
    const [bookingDate, setBookingDate] = useState(new Date());
    const [startingTime, setStartingTime] = useState('10:00');
    const [endingTime, setEndingTime ] = useState('12:00');

    const toastOption = {
        position : "top-right",
        autoClose : 8000,
        pauseOnHover : true,
        theme : "dark",
        draggable : true
    }

    const excludedDates = [
        new Date("2024-08-10"),
        new Date("2024-08-15"),
        new Date("2024-08-20")
    ];
    
    useEffect(()=>{
        axios.get(getSingleDoctor+`${id}`, {
            headers: {
                'Authorization': 'Bearer ' + loginToken
            }
        })
        .then((res)=>{
            if(res.data && res.data.status === true){
                setProfileData(res.data.data);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
    const handleTime = (e,type) => {
        console.log("EEEE" , e.target.value);
        if(type === "startingTime") setStartingTime(e.target.value);
        if(type === "endingTime") setEndingTime(e.target.value);   
    }

    const handleBooking = () => {
        console.log("Bookinggg" , bookingDate , startingTime, endingTime);
        const dataObj = {
            bookingDate : bookingDate,
            startingTime : startingTime,
            endingTime : endingTime
        }
        if(profileData.ticketPrice <= 0){
            toast("You don't have to pay any amount.", toastOption);
            return;
        }
        else{
            axios.post(getBookingSession+`${id}`,dataObj,{
                headers : {
                    'Authorization': 'Bearer ' + loginToken
                }
            })
            .then(async(res)=>{
                if(res.data && res.data.status == true){
                    window.location.href = res.data.session.url;
                }
            })
            .catch((error)=>{
                console.log(error);
                toast(error.response.data.message, toastOption);
            })
        }
    }

    return ( 
        <>
        <div className="max-w-[1170px] px-5 pt-12 mx-auto">
            <div className="grid md:grid-cols-3 gap-[50px]">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-5">
                        <div className="max-w-[200px] max-h-[200px]">
                            <img src={profileData.photo} alt=""/>
                        </div>
                        <div>
                            <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                                {profileData.specialization}
                            </span>
                            <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">{profileData.name}</h3>
                            <div className="flex items-center gap-[6px]">
                                <span className=" flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                                    <img className="w-[20px]" src={starImage} alt=""/>
                                    {profileData.averageRating}
                                </span>
                                <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                                    ({profileData.reviews && profileData.reviews.length > 0 ? profileData.reviews.length : 0})
                                </span>
                            </div>
                            <p className="text_para font-[15px] leading-6 lg:max-w-[390px]">{profileData.bio}</p>
                        </div>
                    </div>
                    <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                        <button onClick={() => setTab("about")} className={`${tab === "about" && "border-b border-solid border-black"} px-5 py-2 mr-5 text-[16px] leading-7 font-semibold text-headingColor`}>About</button>
                        <button onClick={() => setTab("feedback")} className={`${tab === "feedback" && "border-b border-solid border-black"} px-5 py-2 mr-5 text-[16px] leading-7 font-semibold text-headingColor`}>Feedback</button>
                    </div>
                    <div className="my-[50px]">
                        { tab === "about" &&  <DoctorAbout profileData={profileData}/>}
                        { tab === "feedback" &&  <DoctorFeedback profileData={profileData}/>}
                    </div>
                </div>
                <div className="lg-flex flex-col p-[30px] bg-white items-center h-max rounded-md shadow-panelShadow">
                    <div className="flex items-center justify-between">
                        <p className="text_para mt-0 font-semibold">Ticket Price</p>
                            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">{profileData.ticketPrice} BDT</span>
                    </div>
                    <div className="mt-[30px]">
                        <p className="text_para mt-0 font-semibold">Book Available Slots:</p>
                        {/* <ul className="mt-3">
                            { profileData.timeSlots && profileData.timeSlots.length > 0 ? 
                                profileData.timeSlots.map((time,index)=>{
                                    return <li className="flex items-center justify-between mb-2" key={index}>
                                        <p className="text-[15px] leading-5 font-semibold">
                                            {time.day.charAt(0).toUpperCase()+ time.day.slice(1)}
                                        </p>
                                        <p className="text-[15px] leading-5 font-semibold">
                                            {time.startingDate} : {time.endingDate}
                                        </p>
                                    </li>
                                })
                            :
                            "No time slots are available"}
                        </ul> */}
                        <div className="flex justify-center items-center">
                            <DatePicker
                                className="text-center outline-none"
                                selected={bookingDate}
                                onChange={(date) => setBookingDate(date)}
                                excludeDates={excludedDates}
                                minDate={new Date()}
                                dateFormat="MMM d, yyyy"
                                placeholderText="Select a date"
                            />
                        </div>
                        <div className="flex justify-evenly">
                            <input type="time" name="startingTime" className="pt-1 outline-none" value={startingTime} onChange={(e) => handleTime(e,"startingTime")}/>
                            <input type="time" name="endingTime" className="pt-1 outline-none" value={endingTime} onChange={(e) => handleTime(e,"endingTime")}/>
                        </div>
                    </div>
                   
                    <button className="bg-[#5777d7] text-white p-2 mt-8 px-5 rounded-full font-semibold text-[16px] leading-7 border border-solid" onClick={handleBooking}>Book Appointment</button>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    );
}

export default DoctorDetails;