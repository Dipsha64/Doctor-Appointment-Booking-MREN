const userModel = require("../model/UserSchema");

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

module.exports = { getSingleUser, getAllUser, updateUser, deleteUser };