const jwt = require("jsonwebtoken");
const doctorModel = require("../model/DoctorSchema");
const userModel = require("../model/UserSchema");

const authenticate = async (req,res,next) =>{
    // Get Token From Headers
    const authToken = req.headers.authorization;

    // Check if token is exists or not
    if(!authToken || !authToken.startswith("Bearer ")){
        return res.json({message : "No token, authorization denied",status : false});
    }

    try {
        console.log("TOKEN", authToken);
        next();
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { authenticate };