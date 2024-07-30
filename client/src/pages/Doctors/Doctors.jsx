import "../Doctors/DoctorStyle.css";
import { useEffect, useState } from "react";
import { getAllDoctor } from "../../utils/APIRoutes";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsArrowDownRightSquare } from "react-icons/bs";

function Doctors() {
    const [doctorData, setDoctorData ] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        axios.get(getAllDoctor).then((res)=>{
            console.log("RESSSSSSS" , res);
            if(res.data && res.data.status === true){
                setDoctorData(res.data.data)
            }
        }).catch((error)=>{
            console.log(error);
        })
    },[]);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    
        // Send the GET request with query parameter
        axios.get(getAllDoctor, {
          params: { query } // Query parameter passed here
        })
        .then((res) => {
            if(res.data && res.data.status === true){
                setDoctorData(res.data.data)
            }
        })
        .catch((error) => {
          console.error('Error fetching doctors:', error);
        });
    }

    return ( 
        <>
        <div className="flex justify-center items-center p-20">
            <div>
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <input 
                        type="text" 
                        className="pl-4 pr-12 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 w-96" 
                        value={searchQuery}
                        placeholder="Search..."
                        onChange={handleSearch}
                        />
                        <button 
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                            fillRule="evenodd" 
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zm8 8a8 8 0 11-16 0 8 8 0 0116 0z" 
                            clipRule="evenodd" 
                            />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                    { doctorData && doctorData.length > 0 ? 
                        doctorData.map((data,index)=>{
                            return <div className="p-3 lg:p-5 grid justify-center items-center">
                                <div className="w-60 h-60">
                                    <img src={data.photo} className="w-full h-full object-cover object-center"/>
                                </div>
                                <h4 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">{data.name}</h4>
                                <div className="mt-2 lg:mt-4 flex items-center justify-between">
                                    <div>
                                    {data.specialization && <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">{data.specialization}</span> }
                                    </div>
                                    <Link to={`/doctors/${data._id}`} className="flex items-center gap-[6px]">
                                        <BsArrowDownRightSquare size={'1.5rem'}/>
                                    </Link>
                                </div>
                            </div>
                        })
                    : "No Doctor Found!!"}
                </div>
            </div>
        </div>
        </>
    );
}

export default Doctors;