const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    email : {
        type : String,
        required : [true, "Email is required."],
        unique : true
    },
    password : {
        type : String,
        required : [true,"Password is required"]
    },
    name : {
        type : String,
        required : [true,"Name is required"]
    },
    phone : {
        type : Number
    },
    photo : {
        type : String,
    },
    ticketPrice : {
        type : Number,
    },
    role : {
        type : String,
    },
    //Fields for doctor role Only
    specialization : {
        type : String
    },
    qualifications: {
        type: Array,
    },
    experiences: {
        type: Array,
    },
    bio: { type: String, maxLength: 50 },
    about: { type: String },
    timeSlots: { type: Array },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    averageRating: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
}) 

module.exports = mongoose.model("Doctor",doctorSchema);