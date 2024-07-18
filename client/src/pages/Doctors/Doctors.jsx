import "../Doctors/DoctorStyle.css";


function Doctors() {
    return ( 
        <>
        {/* <section>
            <div className="continer">
                <h2>Find a Doctor</h2>
                <div className="searchInfo">
                    <input type="search" placeholder="search doctor" className="search-field"/>
                </div>
                <div className="doctor-wrapper">
                    <article>
                        <div className="doctor-info">
                            <img src={docImage1} alt="docImage1"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Surgeon</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage2} alt="docImage2"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Neurologist</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage3} alt="docImage3"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>General Surgeon</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage1} alt="docImage1"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Dentist</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage2} alt="docImage2"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Neurologist</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                </div>
            </div>
        </section> */}
        <div className="flex justify-center items-center p-20">
            <div>
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <input 
                        type="text" 
                        className="pl-4 pr-12 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 w-96" 
                        placeholder="Search..."
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
            </div>
        </div>
        </>
    );
}

export default Doctors;