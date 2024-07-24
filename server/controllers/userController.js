const userModel = require("../model/UserSchema");
const bookingModel = require("../model/BookingSchema");
const doctorModel = require("../model/DoctorSchema");

const getSingleUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const getUser = await userModel.findById(id).select("-password");
        if(getUser){
            res.json({message : "User Found",data : getUser, status : true});
        }
        else{
            res.json({message : "User Not found",status : false});
        }
    }
    catch(error){
        console.log(error);
        res.json({message : "User Not found",status : false});
    }
}

const getAllUser = async (req,res) =>{
    try{
        const userData = await userModel.find({}).select("-password");
        if(userData){
            res.json({message : "User Found",data : userData,status : true});
        }
        else{
            res.json({message : "User Not found",status : false});
        }
    }
    catch(error){
        console.log(error);
        res.json({message : "User Not found",status : false});
    }
}

const updateUser = async (req,res) =>{
    try{
        const id = req.params.id;
        const updateUser = await userModel.findByIdAndUpdate(id,{$set : req.body},{new : true});
        res.json({message : "User Updated successfully", status : true, data: updateUser});
    }
    catch(error){
        console.log(error);
        res.json({message : "User Not Updated", status : false})
    }
}

const deleteUser = async (req,res) =>{
    try{
        const id = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(id);
        res.json({message : "User Deleted successfully", status : true});
    }
    catch(error){
        res.json({message : "Something went wrong", status : false});
        console.log(error);
    }
}

const getUserProfile = async (req,res) => {
    try {
        const userId = req.body.id;
        const getUser = await userModel.findById(userId).select("-password");
        if(getUser){
            res.json({message : "User Found",data : getUser, status : true});
        }
        else{
            res.json({message : "User Not found",status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

const getMyAppointments = async (req,res) => {
    try {
        console.log("RE BODYY",req.body);
        // Step-1 Retrive appointment from booking for specific user
        const booking = await bookingModel.find({ user : req.body.id});
        console.log("booking..." ,booking);
        if(booking.length <= 0){
            res.json({message : "There are no any Appointments is there.", status : false});
        }

        // step-2 Extract doctors ids from appointment bookings
        const doctorId = booking.map(el=>el.doctor.id);
        console.log("doctorId..." ,doctorId);
        // step-3 retrive doctors from docto IDS
        if(doctorId){
            const doctor = doctorModel.find({ _id : {$in : doctorId}}).select("-password");
            res.json({message : "Appointment are getting.",data : doctor, status : true});
        }
        else{
            res.json({message : "There are something wrong in appointments booking.", status : false});
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getSingleUser, getAllUser, updateUser, deleteUser, getUserProfile, getMyAppointments };