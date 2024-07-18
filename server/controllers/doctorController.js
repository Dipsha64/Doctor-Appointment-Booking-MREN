const doctorModel = require("../model/DoctorSchema");

const getSingleDoctor = async (req,res) =>{
    try{
        const docId = req.params.id;
        console.log("docId.." ,docId);
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
        const query = req.query;
        let fetchData = null;
        if(Object.keys(query).length > 0){
            fetchData = await doctorModel.find({isApproved : "approved",
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
            res.json({message : "Doctor updated successfully",status : true, data:updatedData});
        }
        else{
            res.json({message : "User not updated.",status : false});
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
module.exports = { getSingleDoctor,getAllDoctor,updateDoctor,deleteDoctor };