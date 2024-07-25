

const Tabs = ({tab, setTab}) => {

    return ( 
        <>
        <div>
            <span>

            </span>
            <div className="lg-flex flex-col p-[30px] bg-white items-center h-max rounded-md shadow-panelShadow">
                <button onClick={() => setTab("overview")} className={`${tab === "overview" ? "bg-indigo-100" : "bg-transparent"} w-full btn h-12 text-lg mt-0 rounded-md`}>Overview</button>
                <button onClick={() => setTab("appointment")} className={`${tab === "appointment" ? "bg-indigo-100" : "bg-transparent"} w-full btn h-12 text-lg mt-0 rounded-md`}>Appointment</button>
                <button onClick={() => setTab("profile")} className={`${tab === "profile" ? "bg-indigo-100" : "bg-transparent"} w-full btn h-12 text-lg mt-0 rounded-md`}>Profile</button>

                <div className="mt-[100px] w-full">
                    <button className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">Logout</button>
                    <button className="w-full mt-[20px] bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">Logout</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Tabs;