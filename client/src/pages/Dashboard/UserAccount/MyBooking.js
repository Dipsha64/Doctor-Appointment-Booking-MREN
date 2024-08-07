import { useState } from "react";
import starImage from "../../../assets/images/Star.png";

function MyBooking({appointmentData}) {
    console.log("appointmentData..." ,appointmentData);
    return ( 
        <>
        <div>
            { appointmentData && appointmentData.length > 0 ? 
                <div className="">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                        { appointmentData.map((item,index)=>{
                            return <div className="w-full flex gap-2.5" key={index}>
                                    <div className="border-2 border-solid border-gray-400 rounded-[10px] p-[14px] w-1/5">
                                        <h2>8 Aug, 2024</h2>
                                        <h4> 10:00 to 10:15 </h4>
                                    </div>
                                    <div className="flex items-center gap-4 border-2 border-solid border-gray-400 rounded-[10px] p-[14px] w-4/5">
                                        <img className="w-[55px] h-[55px] rounded-full" src={item.doctor.photo} alt=""/>
                                        <div>
                                            <h2 className="text-[18px] leading-[30px] lg:text-[24px] lg:leading-9 text-headingColor">{item.doctor.name}</h2>
                                        </div>
                                        <div className="h-[60px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent dark:via-neutral-600">
                                        </div>
                                        <div>
                                            <h3>{item.doctor.specialization}</h3>
                                        </div>
                                        <div>
                                        <span className=" flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                                            <img className="w-[20px]" src={starImage} alt=""/> 4.5
                                            {/* {item.doctor.averageRating} */}
                                        </span>
                                        </div>
                                    </div>
                                    
                                </div>
                        })}
                         
                        <div>01</div>
                        <div>01</div>
                        <div>01</div>
                        <div>01</div>
                        <div>01</div>
                        <div>01</div>
                    </div>
                </div>
            :
            <div className="p-14"><span className="p-14 text-slate-700 font-bold">You did not book an doctor yet!!</span> </div>
            }
        </div>
        </>
    );
}

export default MyBooking;