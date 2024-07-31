import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

function DoctorFeedback({profileData}) {
    const [ showFeedbackForm, setShowFeedbackForm ] = useState(false);

    const handleCloseForm = () => {
        setShowFeedbackForm(false);
    }
    return ( 
        <>
        <div>
        <div className="mb-[50px]">
            <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">All Reviews ({profileData.reviews.length})</h4>
            {profileData.reviews && profileData.reviews.length > 0 ? 
                profileData.reviews.map((item,index)=>{
                    return (
                        <div className="flex justify-between gap-10 mb-[30px]" key={index}>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={item.user.photo} alt=""/>
                                </div>
                                <div >
                                    <h5 className="text-[16px] leading-6 font-bold">{item.user.name}</h5>
                                    <p className="text-[14px] leading-6 text-textColor">{new Date(item.createdAt).toDateString()}</p>
                                    <p className="text_para mt-3 font-medium text-[15px]">{item.reviewText}</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(item.rating).keys()].map((_,key)=>{
                                    return <AiFillStar key={key} color="#0067FF"/>
                                })}
                            </div>
                        </div>
                    )
                })
            : "There are no any reviews." }

            

        </div>
        
        {!showFeedbackForm && (
            <div className="text-center">
                <button className="bg-[#5777d7] text-white p-2 mt-8 px-5 rounded-full font-semibold text-[16px] leading-7 border border-solid" onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
            </div>
        )}
        { showFeedbackForm && (
            <FeedbackForm onFormClose={handleCloseForm}/>
        )}
        </div>
        </>
    );
}

export default DoctorFeedback;