const userModel = require("../model/UserSchema");
const doctorModel = require("../model/DoctorSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (obj) =>{
    return jwt.sign({id : obj.id, role : obj.role},process.env.JWT_SECRET_KEY,{expiresIn : '365d'});
}

const register = async (req,res) =>{
    try{
        const {name, email, password, role, gender, photo } = req.body;
        // let userExist = null;
        let isPatient = null;
        let isDoctor = null;
        isPatient = await userModel.findOne({email : req.body.email});
        isDoctor = await doctorModel.findOne({email : req.body.email});
        if(isPatient){
            res.status(400).json({ message : "This email address is already exist"});
        }
        else if(isDoctor){
            res.status(400).json({ message : "This email address is already exist"});
        }
        else{
            const hashpassword = await bcrypt.hash(password , 10);
            if(role == "patient"){
                const newUser = await userModel.create({
                    name, email, password : hashpassword, role, gender, photo  
                })
                if(Object.keys(newUser).length > 0){
                    res.json({message : "User Registerd successfully",status : true,data : newUser});
                }
                else {
                    res.json({message : "Requested data is not valid, Please try it again",status : false});
                }
            }
            if(role == "doctor"){
                const newUser = await doctorModel.create({
                    name, email, password : hashpassword, role, gender, photo  
                })
                if(newUser){
                    res.json({message : "User Registerd successfully",status : true,data : newUser});
                }
                else {
                    res.json({message : "Requested data is not valid, Please try it again",status : false});
                }
            }
        }
    }
    catch(error){
        console.log(error);
    }
}

const login = async (req,res) =>{
    try{
        const { email, password } = req.body;
        let userData = null;
        let isPatient = await userModel.findOne({email : req.body.email});
        let isDoctor = await doctorModel.findOne({email : req.body.email});
        if(isPatient){
            userData = isPatient;
        }
        if(isDoctor){
            userData = isDoctor;
        }
        if(!userData){
            res.json({message : "User does not exist. Please create a user."});
        }
        else{
            bcrypt.compare(req.body.password,userData.password,(err, data)=>{
                if(data){
                    let obj = {"id": userData._id , "name" : userData.name , "email" : userData.email, "photo" : userData.photo,"role" : userData.role}
                    let token = generateToken(obj);
                    res.json({message : "login successfully",status : true , data : obj,token:token});
                }
                else {
                    res.json({message : "Incorrect email & password, Please try it again.",status : false});
                }
            })
        }
    }
    catch(error){
        console.log(error);
    }
}
module.exports = { register, login };