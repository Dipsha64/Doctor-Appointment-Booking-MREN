const express = require("express");
const router = express.Router();
const { getSingleUser, getAllUser, updateUser, deleteUser } = require("../controllers/userController");
const { authenticate } = require("../auth/verifyToken");

router.get("/:id",authenticate,getSingleUser);
router.get("/",getAllUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;