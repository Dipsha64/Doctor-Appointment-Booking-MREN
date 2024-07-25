const DoctorAbout = ({profileData}) => {
    return ( 
        <div>
        <div>
            <h3 className="text-[16px] leading-9 font-semibold mt-3">About of <span className="text-irisBlueColor font-bold">{profileData.name}</span></h3>
            <p className="text_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos vitae minima, corrupti laudantium recusandae officia suscipit voluptates eaque expedita, temporibus mollitia corporis possimus veritatis laborum iure tenetur. Illo, accusamus.
            </p>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div className="flex flex-col">
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {new Date().toDateString()} -  {new Date().toDateString()}
                        </span>
                        <span className="">PHD in Surgen</span>
                    </div>
                    <div>
                        <span>New Apollo Hospital, NY</span>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default DoctorAbout;