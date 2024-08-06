const express = require("express");
const router = express.Router({mergeParams: true});
const { getSingleUser, getAllUser, updateUser, deleteUser,getUserProfile, getMyAppointments } = require("../controllers/userController");
const { authenticate, restrict } = require("../auth/verifyToken");

router.get("/:id",authenticate, restrict(['patient']) ,getSingleUser);
router.get("/",authenticate,restrict(['admin']),getAllUser);
router.put("/:id",updateUser);
router.delete("/:id",authenticate,restrict(['patient']),deleteUser);
router.post("/profile/me",authenticate,restrict(['patient']),getUserProfile);
router.post("/appointment",authenticate,restrict(['patient']),getMyAppointments);

module.exports = router;