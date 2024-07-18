const mongoose = require("mongoose");
const doctorSchema = require("./DoctorSchema");

const reviewSchema = mongoose.Schema({
    doctor : {
        type : mongoose.Types.ObjectId,
        ref : "Doctor",
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    reviewText : {
        type : String,
        required : true,
    },
    rating : {
        type : Number,
        required : true,
        min : 0,
        max : 5,
        default: 0,
    },
},{
    timestamps : true
});

// WE STORE ONLY REVIEW ID BUT WE WANT TO GET ALL REVIEW DETAILS SO THAT WE NEED TO POPULATE THEM.
reviewSchema.pre(/^find/,function(next){
    this.populate({
        path : "user",
        // Pass field name which you want ti get likw email, name, photo etc...
        select : "name photo"
    })
    next();
})

// Calculate Avarage Rating of Reviews
reviewSchema.statics.calcAverageRating = async function(doctorId){
    // At this point the current review
    // Here this represent a current Review
    // Aggregation is like set of data processing steps for MongoDB. Its allows to fildter, sort, group the data
    const stats = await this.aggregate([
        // Its match Doctor ID & the group that data for calculate Rating
        {
            $match : {doctor : doctorId}
        },
        {
            $group : {
                _id : '$doctor',
                numOfRating : { $sum : 1},
                avgRating : { $avg : '$rating'}
            }
        }
    ]);
    console.log("stats..." ,stats);
    // Now we have to update avarage rating field in Doctor table. So we need to update that field.
    await doctorSchema.findByIdAndUpdate(doctorId,{
        totalRating : stats[0].numOfRating,
        averageRating : stats[0].avgRating
    })
}
// NOW called that calcAverageRating function using post method & pass Doctore ID to that function
// Here RreviewSchema.post is a middleware function. This is called after review document is saved.
reviewSchema.post("save",function(){
    this.constructor.calcAverageRating(this.doctor)
})
module.exports = mongoose.model("Review",reviewSchema);