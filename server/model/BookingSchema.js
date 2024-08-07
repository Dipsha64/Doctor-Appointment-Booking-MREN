const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    doctor : {
        type : mongoose.Types.ObjectId,
        ref : "Doctor"
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    ticketPrice : {
        type : String,
        required : true,
        default : 0
    },
    bookingDate : {
        type : Date,
        required : true
    },
    startingTime : {
        type : String,
    },
    endingTime : {
        type : String,
    },
    status : {
        type : String,
        enum : ["pending","approved", "cancelled"],
        default : "pending"
    },
    isPaid : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
});


bookingSchema.pre(/^find/,function(next){
    this.populate("user").populate({
        path : "doctor",
        select : "name photo specialization"
    })
    next();
})
module.exports = mongoose.model("Booking",bookingSchema);