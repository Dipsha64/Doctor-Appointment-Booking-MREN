const express = require("express");
const router = express.Router({mergeParams: true});
const {  getAllReview, createReview } = require("../controllers/reviewController");
const { authenticate, restrict } = require("../auth/verifyToken");

router.get("/", getAllReview);
router.post("/",authenticate,restrict(["patient"]),createReview);

// router.route("/").get(getAllReview).post(authenticate,restrict(["patient"]),createReview);

module.exports = router;