import mongoose from "mongoose";

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
        required : true
    },
    appointmentDate : {
        type : Date,
        required : true
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

module.exports = mongoose.model("Booking",bookingSchema);