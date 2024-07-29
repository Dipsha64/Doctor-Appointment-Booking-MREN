import { getAllDoctor } from "../../utils/APIRoutes";
import { useEffect, useState } from "react";
import axios from "axios";

function DoctorCard() {
    const [doctorData, setDoctorData ] = useState([]);
    useEffect(()=>{
        axios.get(getAllDoctor).then((res)=>{
            console.log("RESSSSSSS" , res);
            if(res.data && res.data.status === true){
                setDoctorData(res.data.data)
            }
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    return ( 
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="p-3 lg:p-5">
                { doctorData && doctorData.length > 0 ? 
                    doctorData.map((data,index)=>{
                        return <div className="p-3 lg:p-5">
                            <div>
                                <img src={data.photo} className="w-full"/>
                            </div>
                            <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">{data.name}</h2>
                            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">{data.specialization}</span>

                                <div className="flex items-center gap-[6px]">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    })
                : "No Doctor register yet!!"}
            </div>
        </div>
        </>
    );
}

export default DoctorCard;