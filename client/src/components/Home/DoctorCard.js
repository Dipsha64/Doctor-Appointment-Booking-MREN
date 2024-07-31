import { getAllDoctor } from "../../utils/APIRoutes";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowDownRightSquare } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DoctorCard() {
    const [doctorData, setDoctorData ] = useState([]);
    const toastOption = {
        position : "top-right",
        autoClose : 8000,
        pauseOnHover : true,
        theme : "dark",
        draggable : true
    }
    useEffect(()=>{
        axios.get(getAllDoctor).then((res)=>{
            if(res.data && res.data.status === true){
                setDoctorData(res.data.data)
            }
        }).catch((error)=>{
            console.log(error);
            toast(error.response.data.message, toastOption);
        })
    },[])

    return ( 
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                { doctorData && doctorData.length > 0 ? 
                    doctorData.slice(0,3).map((data,index)=>{
                        return <div className="p-3 lg:p-5 grid justify-center items-center">
                            <div className="w-60 h-60">
                                <img src={data.photo} className="w-full h-full object-cover object-center"/>
                            </div>
                            <h4 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">{data.name}</h4>
                            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                                <div>
                                {data.specialization && <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">{data.specialization}</span> }
                                </div>
                                <div className="flex items-center gap-[6px]">
                                <BsArrowDownRightSquare size={'1.5rem'}/>
                                </div>
                            </div>
                        </div>
                    })
                : "No Doctor register yet!!"}
        </div>
        <ToastContainer/>
        </>
    );
}

export default DoctorCard;