const doctorModel = require("../model/DoctorSchema");
const bokingModel = require("../model/BookingSchema");

const getSingleDoctor = async (req,res) =>{
    try{
        const docId = req.params.id;
        const doctorData = await doctorModel.findById(docId).populate("reviews").select("-password");
        if(doctorData){
            res.json({message:"Doctor is found",status : true,data : doctorData});
        }
        else{
            res.json({message : "Doctor not found", status : false});
        }
    }
    catch(error){
        console.log(error);
        res.json({message : "Doctor not found", status : false});
    }
}

const getAllDoctor = async (req,res) => {
    try{
        const query = req.query.query;
        let fetchData = null;
        if(query !== undefined){
            fetchData = await doctorModel.find({
            $or:[
                {name : {$regex : query, $options : "i"}},
                {specialization : {$regex: query, $options : "i"}}
            ]
            }).select("-password");
        }
        else{
            fetchData = await doctorModel.find({isApproved : "pending"}).select("-password");
        }
        if(fetchData){
            res.json({message : "Doctor is found",status : true,data : fetchData});
        }
        else{
            res.json({message : "Doctor not found", status : false});
        }
    }
    catch(error){
        res.json({message : "Doctor not found", status : false});
        console.log(error);
    }
}

const updateDoctor = async (req,res) =>{
    try{
        const id = req.params.id;
        const updatedData = await doctorModel.findByIdAndUpdate(id,{$set:req.body},{new: true});
        if(updatedData){
            res.json({message : "Doctor profile updated successfully",status : true, data:updatedData});
        }
        else{
            res.json({message : "Profile not updated.",status : false});
        }
    }
    catch(error){
        res.json({message : "User not updated.",status : false});
        console.log(error);
    }
}

const deleteDoctor = async (req,res) =>{
    try{
        const id = req.params.id;
        const deletedData = await doctorModel.findByIdAndDelete(id);
        if(deletedData){
            res.json({message : "Doctor deleted successfully",status : true});
        }
        else{
            res.json({message : "Something went wrong",status:false})
        }
    }
    catch(error){
        res.json({message : "Something went wrong",status:false})
        console.log(error);
    }
}

const getDoctorProfile = async (req,res) => {
    try {
        const docId = req.body.id;
        const doctorData = await doctorModel.findById(docId).select("-password");
        if(!doctorData){
            res.json({message : "Doctor not found", status : false});
        }
        // Get Appointments of that selected doctor
        const appointments = await bokingModel.find({ doctor : docId });
        res.json({message : "Doctor Profile is getting successfully",status : true, data:{doctorData,appointments}});
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getSingleDoctor,getAllDoctor,updateDoctor,deleteDoctor, getDoctorProfile };