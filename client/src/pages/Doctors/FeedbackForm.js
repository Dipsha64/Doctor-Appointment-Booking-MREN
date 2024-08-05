import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { createReview } from "../../utils/APIRoutes";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authorisedToken } from "../../features/auth/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FeedbackForm({onFormClose}) {
    const [ rating, setRating ] = useState(0);
    const [ hover, setHover ] = useState(0);
    const loginToken = useSelector(authorisedToken);
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("ERR",errors);
    const toastOption = {
        position : "top-right",
        autoClose : 8000,
        pauseOnHover : true,
        theme : "dark",
        draggable : true
    }

    const handleFeedbackSubmit = (data) => {
        console.log("DATAA" ,data , rating);
        const obj = { ...data, rating : rating}
        axios.post(createReview+`${id}`+'/reviews',obj,{
            headers: {
                'Authorization': 'Bearer ' + loginToken
            }
        })
        .then((res)=>{
            console.log("RESSSSSSSSS", res);
            if(res.data && res.data.status === true){
                onFormClose();
            }
        })
        .catch((error)=>{
            console.log(error.response.data.message);
            toast(error.response.data.message, toastOption);
        })
    }

    return ( 
        <>
        <form noValidate onSubmit={handleSubmit(handleFeedbackSubmit)}>
            <div>
                <h3 className="text-[16px] leading-6 font-semobold mb-4 mt-0">How would you rate the overall experience? *</h3>
                <div>
                    {[...Array(5).keys()].map((_,index)=>{
                        index +=1;
                        return (
                            <button key={index} type="button" className={`${index <= ((rating && hover) || hover) ? "text-yellowColor" : 'text-gray-400'} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() =>setHover(rating)} onDoubleClick={() => {setHover(0); setRating(0);}}>
                                    <span><AiFillStar/></span>
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="mt-[30px]">
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">Share your feedback or suggestions *</h3>
                <textarea className="border border-solid border-[#0066ff34] focus:outline outline-gray w-full px-2 py-3 rounded-md" name="reviewText" {...register("reviewText")} rows={5} placeholder="Write your message"></textarea>
            </div>
            <button className="bg-[#5777d7] text-white p-2 mt-8 px-5 rounded-full font-semibold text-[16px] leading-7 border border-solid">Submit Feedback</button>
        </form>
        <ToastContainer/>
        </>
    );
}

export default FeedbackForm;