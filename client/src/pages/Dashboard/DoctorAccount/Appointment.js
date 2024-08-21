function Appointment({bookingAppointment}) {
    return ( 
        <>
        <table className="w-full text-sm text-grey-500 text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 h-10">
                <tr>
                    <th scope="col" className="text-center">Name</th>
                    <th className="text-center">Gender</th>
                    <th className="text-center">Payment</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Booked on</th>
                </tr>
            </thead>
            <tbody>
                { bookingAppointment && bookingAppointment.length > 0 ? 
                    bookingAppointment.map((item, index)=>{
                        return <tr>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                <img src={item.user.photo} className="h-10 w-10 rounded-full"/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{item.user.name}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">{item.user.gender}</td>
                            <td className="px-6 py-4">
                                {item.isPaid && <div className="flex items-center gap-2.5">
                                        <div className="h-2.5 w-2.5 rounded-md bg-green-500">
                                        </div>
                                        <div>Paid</div>
                                    </div>
                                }
                                { !item.isPaid && <div className="flex items-center gap-2.5">
                                        <div className="h-2.5 w-2.5 rounded-md bg-red-500">
                                        </div>
                                        <div>Unpaid</div>
                                    </div>
                                }
                            </td>
                            <td className="px-6 py-4">{item.ticketPrice}</td>
                            <td className="px-6 py-4">{item.startingTime} - {item.endingTime}</td>
                        </tr>
                    })
                : ""}
            </tbody>
        </table>
        </>
    );
}

export default Appointment;