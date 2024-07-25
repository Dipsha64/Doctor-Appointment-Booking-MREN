const express = require("express");
const router = express.Router();
const {getSingleDoctor,getAllDoctor,updateDoctor,deleteDoctor, getDoctorProfile} = require("../controllers/doctorController");
const { authenticate, restrict } = require("../auth/verifyToken");

// want to take route as "/doctor/doctorId/review"
const reviewRoutes = require("./reviewRoutes");

// For nesting Routes
router.use("/:doctorId/reviews",reviewRoutes);

router.get("/:id",getSingleDoctor);
router.get("/",getAllDoctor);
router.put("/:id",authenticate, restrict(['doctor']), updateDoctor);
router.delete("/:id",authenticate, restrict(['doctor']),deleteDoctor);
router.post("/profile/me",authenticate, restrict(['doctor']),getDoctorProfile);

module.exports = router;