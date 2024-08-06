import { Link } from "react-router-dom";

function CheckoutSession() {
    return ( 
        <>
        <div className="h-screen bg-gray-100">
            <div className="bg-white md:mx-auto">
                <img />
            </div>
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Payment Done!
                </h3>
                <p className="text-gray-600 my-2">
                    Thank you for completing your secure online payment.
                </p>
                <p>  Have a great day!</p>
                <div className="py-10 text-center">
                    <Link to="/" className="px-12 text-white py-3 font-semibold bg-black"> Go back To Home
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default CheckoutSession;