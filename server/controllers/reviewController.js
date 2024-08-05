const doctorSchema = require("../model/DoctorSchema");
const reviewSchema = require("../model/ReviewSchema");

const getAllReview = async (req,res) => {
    try {
        const review = await reviewSchema.find({});
        res.json({message : "Get All Reviews.", data : review, status : true});
    } catch (error) {
        console.log(error);
        res.json({message : "Not Found", status : false});
    }
}

const createReview =async(req,res) => {
    try {
        console.log("REQQQQQ", req.body , req.userId);
        if(!req.body.doctor){
            req.body.doctor = req.params.doctorId;
        }
        if(!req.body.user){
            req.body.user = req.userId
        }
        const newReview = await reviewSchema.create(req.body);
        console.log("newReview.." ,newReview._id , req.params);
        await doctorSchema.findByIdAndUpdate(req.params.doctorId,{
            $push : { reviews : newReview._id }
        })
        res.json({message : "Create Review successfully.", data : newReview, status : true});
    } catch (error) {
        console.log(error);
        res.json({message : "Something went wrong.", status : false});
    }
}
module.exports = { getAllReview, createReview };