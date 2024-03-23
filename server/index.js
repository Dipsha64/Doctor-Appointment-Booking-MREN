const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOption = {
    origin : true
}

const connectDb = require("./config/dbConnection");
app.use(cookieParser());
app.use(cors(corsOption));
connectDb();

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/doctor",require("./routes/doctorRoutes"));

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server is Running in ",port);
})