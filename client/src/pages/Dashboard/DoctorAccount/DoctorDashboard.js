import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import { getDoctorProfile } from "../../../utils/APIRoutes";
import { isAuthenticated, authorisedToken } from "../../../features/auth/authSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import { MdError } from "react-icons/md";
import starImage from "../../../assets/images/Star.png";
import DoctorAbout from "../../Doctors/DoctorAbout";
import Profile from "./Profile";

function DoctorDashboard() {
    const loginUser = useSelector(isAuthenticated);
    const loginToken = useSelector(authorisedToken);
    const [ tab, setTab ] = useState("overview");
    const [ profileData, setProfileData ] = useState([]);

    const getProfileData = () => {
        axios.post(getDoctorProfile, {id:loginUser.id}, {
            headers: {
                'Authorization': 'Bearer ' + loginToken
            }
        })
        .then((res)=>{
            if(res.data && res.data.status === true){
                console.log("PROFILELE" ,res.data.data.doctorData);
                if(res.data.data.doctorData.qualifications.length == 0){
                    res.data.data.doctorData.qualifications.push({
                        startingDate : '',
                        endingDate : '',
                        degree : '',
                        univercity : ''
                    }) 
                }
                setProfileData(res.data.data.doctorData);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getProfileData();
    },[])
    return ( 
        <>
        <div className="max-w-[1170px] px-5 pt-12 mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
                <Tabs tab={tab} setTab={setTab}/>
                <div className="lg:col-span-2">
                    { profileData.isApproved === "pending" &&
                    <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                        <MdError/>
                        <span className="sr-only">Info</span>
                        <div className="ml-3 tex-sm font-medium">
                            To get approval please complete your profile. We&apos;ll review manually and approve within 3days.
                        </div>  
                    </div>}

                    <div className="mt-8">
                        { tab === "overview" && 
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <img className="max-w-[150px] max-h-[150px]" src={profileData.photo} alt=""/>
                                    <div className="">
                                       { profileData.specialization && <span className="bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">{profileData.specialization}</span> }
                                       <h3 className="text-[20px] leading-9 font-semibold mt-3">{profileData.name}</h3>
                                       <div className="flex items-center gap-[6px]">
                                            <span className=" flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                                                <img className="w-[20px]" src={starImage} alt=""/>
                                                4.5
                                            </span>
                                            <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                                                (223)
                                            </span>
                                        </div>
                                        <p className="text_para font-[15px] leading-6 lg:max-w-[390px]">Doctor Bio</p>
                                    </div>
                                </div>
                                <div>
                                    <DoctorAbout profileData={profileData}/>
                                </div>
                            </div>}
                        { tab === "appointment" && <div>appointment</div>}
                        { tab === "profile" && <Profile profileData={profileData}/>}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DoctorDashboard;