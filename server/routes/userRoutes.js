const express = require("express");
const router = express.Router();
const { getSingleUser, getAllUser, updateUser, deleteUser } = require("../controllers/userController");

router.get("/:id",getSingleUser);
router.get("/",getAllUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;