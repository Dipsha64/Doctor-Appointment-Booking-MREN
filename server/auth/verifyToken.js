const jwt = require("jsonwebtoken");
const doctorModel = require("../model/DoctorSchema");
const userModel = require("../model/UserSchema");

const authenticate = async (req,res,next) =>{
    // Get Token From Headers
    console.log("req..Authentication" ,req.id , req.role);
    const authToken = req.headers.authorization;
    // Check if token is exists or not
    if(!authToken || !authToken.startsWith("Bearer ")){
        return res.json({message : "No token, authorization denied",status : false});
    }

    try {
        // console.log("TOKEN", authToken);
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log("decoded.." ,decoded.role);
        // This re.userId is used by restrict method as request parameters
        req.userId = decoded.id;
        req.role = decoded.role;

        next();
    }
    catch (error) {
        console.log(error);
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({message : "Token is Expired."})
        }
        return res.status(401).json({message : "Invlid Token."})
    }
}

// Only Admin can acess that route
const restrict = roles => async(req,res,next) => {
    // This userId is comes from authentication method
    const userId = req.userId;
    let user;
    const patient = await userModel.findById(userId);
    const doctor = await doctorModel.findById(userId);
    if(patient){
        user = patient;
    }
    if(doctor){
        user = doctor;
    }
    // console.log("user.." ,user);
    if(!roles.includes(user.role)){
        console.log("NOT authorized");
        return res.status(401).json({message : "You're not authorized."});
    }
    next();
}

module.exports = { authenticate, restrict };