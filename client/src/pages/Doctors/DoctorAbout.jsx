const DoctorAbout = ({profileData}) => {
    return ( 
        <div>
        <div>
            <h3 className="text-[16px] leading-9 font-semibold mt-3">About of <span className="text-irisBlueColor font-bold">{profileData.name}</span></h3>
            <p className="text_para">
                {profileData.about}
            </p>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
            <ul className="pt-4 md:p-5">
                { profileData.qualifications && profileData.qualifications.length > 0 ? 
                    profileData.qualifications.map((item, index)=>{
                        return <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                            <div className="flex flex-col">
                                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                    {new Date(item.startingDate).toDateString()} -  {new Date().toDateString()}
                                </span>
                                <span className="">{item.degree}</span>
                            </div>
                            <div>
                                <span>{item.univercity}</span>
                            </div>
                        </li>
                    })
                : 'No data exist yet!!'}
            </ul>
        </div>
        <div className="">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
            <ul className="pt-4 md:p-5">
                { profileData.experiences && profileData.experiences.length > 0 ? 
                    profileData.experiences.map((item, index)=>{
                        return <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                            <div className="flex flex-col">
                                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                    {new Date(item.startingDate).toDateString()} -  {new Date().toDateString()}
                                </span>
                                <span className="">{item.position}</span>
                            </div>
                            <div>
                                <span>{item.hospital}</span>
                            </div>
                        </li>
                    })
                : 'No data exist yet!!'}
            </ul>
        </div>
        </div>
    );
}

export default DoctorAbout;