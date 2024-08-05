const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const userSchema = require("../model/UserSchema");
const doctorSchema = require("../model/DoctorSchema");
const bookingSchema = require("../model/BookingSchema");

const getCheckoutSession = async (req,res) => {
    try {
        // Get Currently Booked Doctor
        const doctorData = await doctorSchema.findById(req.params.id);
        const userData = await userSchema.findById(req.userId);
        console.log("doctorData..." ,doctorData);
        const doctorName = doctorData.name;
        const docId = doctorData._id;
        //Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            // payment_method_types: ['card'],
            mode: "payment",
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctorData.id}`,
            // ui_mode: 'embedded',
            customer_email : doctorData.email,
            line_items: [ 
                { 
                  price_data: { 
                    currency: "inr", 
                    product_data: { 
                      name: doctorData.name, 
                      description : doctorData.bio,
                      images : [doctorData.photo]
                    }, 
                    unit_amount: doctorData.ticketPrice ? doctorData.ticketPrice * 100 : 0
                  }, 
                  quantity: 1, 
                }, 
              ], 
        })

        // Create New Booking
        // const booking = await bookingSchema.create({
        //     doctor : doctorData._id,
        //     user : userData._id,
        //     ticketPrice : doctorData.ticketPrice,
        //     session : session.id
        // })
        res.json({message : "Successfully paid.",session, status : true});
    } catch (error) {
        console.log(error);
        res.json({message : "Something went wrong.", status : false});
    }
}

module.exports = { getCheckoutSession };