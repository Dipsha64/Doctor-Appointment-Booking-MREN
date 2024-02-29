import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
    role : {
        type : String,
        enum: ["patient", "admin"],
        default: "patient",
    },
    gender: { type: String, enum: ["male", "female", "other"] },
    bloodType: { type: String },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

module.exports = mongoose.model("User",userSchema);