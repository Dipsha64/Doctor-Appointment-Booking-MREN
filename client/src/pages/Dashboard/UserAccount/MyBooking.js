import { useState } from "react";

function MyBooking({appointmentData}) {
    console.log("appointmentData..." ,appointmentData);
    return ( 
        <>
        <div>
            { appointmentData && appointmentData.length > 0 ? '' :
            <div className="p-14"><span className="p-14 text-slate-700 font-bold">You did not book an doctor yet!!</span> </div>
            }
        </div>
        </>
    );
}

export default MyBooking;