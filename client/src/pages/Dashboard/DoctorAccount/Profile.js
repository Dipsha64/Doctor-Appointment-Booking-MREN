import { MdDelete } from "react-icons/md";

function Profile({profileData}) {
    console.log("profileData.." ,profileData);
    const addNewQualification = () => {
        profileData.qualifications.push({
            startingDate : '',
            endingDate : '',
            degree : '',
            univercity : ''
        })
        console.log("addNewQualification", profileData.qualifications);
    }

    return ( 
        <>
        <div>
            <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>
            <form>
                <div className="my-6">
                    <p className="font-medium">Name *</p>
                    <input type="text" name="name" className="border-b-2 border-solid border-[#100f0f6b] w-96 outline-none bg-transparent pt-1"/>
                </div>
                <div className="my-6">
                    <p className="font-medium">Email *</p>
                    <input type="email" name="email" className="border-b-2 border-solid border-[#100f0f6b] w-96 outline-none bg-transparent pt-1"/>
                </div>
                <div className="my-6">
                    <p className="font-medium">Phone *</p>
                    <input type="text" name="phone" className="border-b-2 border-solid border-[#100f0f6b] w-96 outline-none bg-transparent pt-1"/>
                </div>
                <div className="my-6">
                    <p className="font-medium">Bio *</p>
                    <input type="text" name="bio" maxLength={50} className="border-b-2 border-solid border-[#100f0f6b] w-96 outline-none bg-transparent pt-1"/>
                </div>
                <div className="flex justify-start my-6 gap-24">
                    <div className="">
                        <p for="gender" className="font-medium">Gender *</p>
                        <select name="gender" id="gender" className="py-3.5 outline-none ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <p for="specialization" className="font-medium">Specialization * </p>
                        <select name="specialization" id="specialization" className="py-3.5 outline-none">
                            <option value="surgeon">Surgeon</option>
                            <option value="neuologist">Neuologist</option>
                            <option value="dermatologist">Dermatologist</option>
                            <option value="dentist">Dentist</option>
                            <option value="Homeopathic">Homeopathic</option>
                            <option value="Physiotherapy">Physiotherapy</option>
                        </select>
                    </div>
                </div>
                <div className="my-6">
                    <p className="font-medium">Ticket Price</p>
                    <input type="number" className="border-b-2 w-96 border-solid border-[#100f0f6b] outline-none bg-transparent pt-1"/>
                </div>
                <div className="my-6">
                    <p className="font-semibold">Qualifications *</p>
                    { profileData.qualifications.length > 0 ? profileData.qualifications.map((item, index)=>{
                        <div key={index}>
                            <div className="flex gap-12 my-4">
                                <div>
                                    <p className="font-medium">Starting Date *</p>
                                    <input type="date" name="startingDate" className="pt-1"/>
                                </div>
                                <div>
                                    <p className="font-medium">Ending Date *</p>
                                    <input type="date" name="endingDate" className="pt-1"/>
                                </div>
                            </div>
                            <div className="flex gap-5 my-6">
                                <div>
                                    <p className="font-medium">Degree *</p>
                                    <input type="text" name="degree" className="border-b-2 border-solid border-[#100f0f6b] outline-none bg-transparent pt-1"/>
                                </div>
                                <div>
                                <p className="font-medium">Univercity *</p>
                                <input type="text" name="univercity" className="border-b-2 border-solid border-[#100f0f6b] outline-none bg-transparent pt-1"/>
                                </div>
                            </div>
                            <MdDelete />
                        </div>
                    }) : "" }
                    <button className="bg-[#181A1E] p-2 text-[16px] leading-7 rounded-md text-white my-4" onClick={addNewQualification}>Add Qualification</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Profile;