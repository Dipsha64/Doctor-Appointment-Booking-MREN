const express = require("express");
const router = express.Router();
const {getSingleDoctor,getAllDoctor,updateDoctor,deleteDoctor} = require("../controllers/doctorController");

router.get("/:id",getSingleDoctor);
router.get("/",getAllDoctor);
router.put("/:id",updateDoctor);
router.delete("/:id",deleteDoctor);

module.exports = router;