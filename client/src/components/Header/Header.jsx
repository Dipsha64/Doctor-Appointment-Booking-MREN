import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState} from "react";
import { FaUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { signOutAsync, isAuthenticated } from "../../features/auth/authSlice";

function Header() {
    const [showMenu, setShowMenu ] = useState(false);
    const navLink = [
        {
            path : "/",
            display : "Home"
        },
        {
            path : "/doctors",
            display : "Find a Doctor"
        },
        {
            path : "/services",
            display : "Services"
        },
        {
            path : "/contact",
            display : "Contact"
        }
    ];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginUser = useSelector(isAuthenticated);
    console.log("loginUser..." ,loginUser);
    const handleMenu = () =>{
        setShowMenu(preve => !preve);
    }
    const handleLogout = () => {
        dispatch(signOutAsync());
        navigate("/login")
    }
    return (
        <>
       <nav className="bg-slate-100">
            <div className="mx-24">
                <div className="flex justify-between">
                    <div className="h-20">
                        <img className="h-20" src={logo} alt="logo"/>
                    </div>
                    <div>
                        <div className="flex">
                            {
                                navLink.map((links, index)=>
                                <button key={index} className="flex p-6 cursor-pointer text-base font-semibold leading-5" type="button" data-headlessui-state="open"><Link to={links.path}>{links.display}</Link></button>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        { loginUser && Object.keys(loginUser).length > 0 ? 
                        <div className="text-slate-900"> 
                            <div className="text-2xl border-solid border-black p-1 cursor-pointer rounded-full cursor-pointer" onClick={handleMenu}>
                                {loginUser.photo !== null ? <img src={loginUser.photo} alt="profile-image" className="w-full rounded-full w-[45px] h-[45px]"/> : <FaUser />}
                            </div>
                            { showMenu &&
                                <div className="absolute bg-white py-3 px-2 shadow drop-shadow-md flex flex-col text-base font-normal leading-6">
                                    { loginUser.role === "patient" ? <Link to={"/user/profile/me"}><span className="whitespace-nowrap cursor-pointer">Profile</span></Link>
                                    : 
                                    <Link to={"/doctor/profile/me"}><span className="whitespace-nowrap cursor-pointer">Profile</span></Link>}
                                    
                                    <span className="whitespace-nowrap cursor-pointer" onClick={handleLogout}>Logout</span>
                                </div>
                            }
                        </div>
                        :
                        <div className="text-slate-900">
                            <Link to={"/login"}><button className="border-1 border-solid rounded-full bg-[#f72585] text-white w-fit py-3 px-8 text-base font-semibold" >Login</button></Link>
                        </div>
                        }
                    </div>
                </div>
            </div>
       </nav>
       </>
    );
}

export default Header;