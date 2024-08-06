const express = require("express");
const router = express.Router({mergeParams: true});
const { getCheckoutSession } = require("../controllers/bookingController");
const { authenticate, restrict } =  require("../auth/verifyToken");

router.post('/checkout-session/:id',authenticate,restrict(["patient"]),getCheckoutSession);

module.exports = router;