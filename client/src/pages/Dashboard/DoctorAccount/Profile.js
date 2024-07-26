import { MdDelete } from "react-icons/md";

function Profile({profileData,addNewQualification,inputFieldChange ,removeFieldRow,addNewExperience,addNewTimeSlot, updateProfile}) {

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
                    <p className="font-semibold text-irisBlueColor">Qualifications *</p>
                    { profileData.qualifications.length > 0 ? profileData.qualifications.map((item, index)=>{
                        return <div key={index}>
                            <div className="flex gap-12 my-4">
                                <div>
                                    <p className="font-medium">Starting Date *</p>
                                    <input type="date" name="startingDate" className="pt-1" value={item.startingDate} onChange={(e)=>inputFieldChange(e,index,"qualifications")}/>
                                </div>
                                <div>
                                    <p className="font-medium">Ending Date *</p>
                                    <input type="date" name="endingDate" className="pt-1" value={item.endingDate} onChange={(e)=>inputFieldChange(e,index,"qualifications")}/>
                                </div>
                            </div>
                            <div className="flex gap-5 my-6">
                                <div>
                                    <p className="font-medium">Degree *</p>
                                    <input type="text" name="degree" value={item.degree} className="border-b-2 border-solid border-[#100f0f6b] outline-none bg-transparent pt-1" onChange={(e)=>inputFieldChange(e,index,"qualifications")}/>
                                </div>
                                <div>
                                <p className="font-medium">Univercity *</p>
                                <input type="text" name="univercity" value={item.univercity} className="border-b-2 border-solid border-[#100f0f6b] outline-none bg-transparent pt-1" onChange={(e)=>inputFieldChange(e,index,"qualifications")}/>
                                </div>
                            </div>
                            <MdDelete color="red" onClick={() => removeFieldRow(index,"qualifications")}/>
                        </div>
                    }) : "" }
                    <button type="button" className="bg-[#181A1E] p-2 text-[16px] leading-7 rounded-md text-white my-4" onClick={() => addNewQualification("qualifications")}>Add Qualification</button>
                </div>
                <div className="my-6">
                    <p className="font-semibold text-irisBlueColor">Experiences *</p>
                    { profileData.experiences.length > 0 ? profileData.experiences.map((item, index)=>{
                        return <div key={index}>
                            <div className="flex gap-12 my-4">
                                <div>
                                    <p className="font-medium">Starting Date *</p>
                                    <input type="date" name="startingDate" className="pt-1" value={item.startingDate} onChange={(e)=>inputFieldChange(e,index,"experiences")}/>
                                </div>
                                <div>
                                    <p className="font-medium">Ending Date *</p>
                                    <input type="date" name="endingDate" className="pt-1" value={item.endingDate} onChange={(e)=>inputFieldChange(e,index,"experiences")}/>
                                </div>
                            </div>
                            <div className="flex gap-5 my-6">
                                <div>
                                    <p className="font-medium">Position *</p>
                                    <input type="text" name="position" value={item.position} className="border-b-2 border-solid border-[#100f0f6b] outline-none bg-transparent pt-1" onChange={(e)=>inputFieldChange(e,index,"experiences")}/>
                                </div>
                                <div>
                                <p className="font-medium">Hospital *</p>
                                <input type="text" name="hospital" value={item.hospital} className="border-b-2 border-solid border-[#100f0f6b] outline-none bg-transparent pt-1" onChange={(e)=>inputFieldChange(e,index,"experiences")}/>
                                </div>
                            </div>
                            <MdDelete color="red" onClick={() => removeFieldRow(index,"experiences")}/>
                        </div>
                    }) : "" }
                    <button type="button" className="bg-[#181A1E] p-2 text-[16px] leading-7 rounded-md text-white my-4" onClick={()=>addNewExperience()}>Add Experiences</button>
                </div>
                <div className="my-6">
                    <p className="font-semibold text-irisBlueColor">Time Slots *</p>
                    { profileData.timeSlots.length > 0 ? profileData.timeSlots.map((item, index)=>{
                        return <div key={index}>
                            <div className="flex gap-12 my-4">
                                <div>
                                <p className="font-medium">Day *</p>
                                    <select name="day" id="day" className="py-3.5 outline-none" onChange={(e)=>inputFieldChange(e,index,"timeSlots")}>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="font-medium">Starting Date *</p>
                                    <input type="date" name="startingDate" className="pt-1" value={item.startingDate} onChange={(e)=>inputFieldChange(e,index,"timeSlots")}/>
                                </div>
                                <div>
                                    <p className="font-medium">Ending Date *</p>
                                    <input type="date" name="endingDate" className="pt-1" value={item.endingDate} onChange={(e)=>inputFieldChange(e,index,"timeSlots")}/>
                                </div>
                                <MdDelete color="red" onClick={() => removeFieldRow(index,"timeSlots")}/>
                            </div>
                        </div>
                    }) : "" }
                    <button type="button" className="bg-[#181A1E] p-2 text-[16px] leading-7 rounded-md text-white my-4" onClick={() => addNewTimeSlot()}>Add Time Slot</button>
                </div>
                <div className="my-6">
                    <p className="font-medium">About</p>
                    <textarea name="about" rows={5} value={profileData.about} className="pt-1 border-b-2 border-solid border-[#100f0f6b] w-96 outline-none bg-transparent" placeholder="Write about yourself"/>
                </div>
                <div className="my-7">
                <button className="bg-[#5777d7] text-white p-2 mt-8 px-5 rounded-full font-semibold text-[16px] leading-7 border border-solid" onClick={updateProfile}>Update Profile</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Profile;