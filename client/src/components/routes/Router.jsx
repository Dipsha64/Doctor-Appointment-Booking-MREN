import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import Services from "../../pages/Services";
import Doctors from "../../pages/Doctors/Doctors";
import DoctorDetails from "../../pages/Doctors/DoctorDetails";
import Contact from "../../pages/Contact";

function Router() {
    return ( 
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/doctors" element={<Doctors/>}></Route>
                <Route path="/doctors/:id" element={<DoctorDetails/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Signup/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        // </BrowserRouter>
    );
}

export default Router;