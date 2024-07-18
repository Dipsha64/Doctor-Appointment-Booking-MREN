import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profile_pic from "../../assets/images/profile_pic.png";
// import "../Header/HeaderStyle.css";
import { useEffect, useRef, useState} from "react";
import { FaUser } from "react-icons/fa6";

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
    const handleMenu = () =>{
        setShowMenu(preve => !preve);
    }
    const headerRef = useRef(null);
    const menuRref = useRef(null);

    // const handleStickyheader = () =>{
    //     window.addEventListener("scroll",()=>{
    //         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    //             headerRef.current.classList.add('sticky_header');
    //         }
    //         else {
    //             headerRef.current.classList.remove('sticky_header');
    //         }
    //     })
    // }

    // useEffect(()=>{
    //     handleStickyheader()
    //     return ()=> window.removeEventListener("scroll",handleStickyheader);
    // })
    return (
        <>
       {/* <header className="header" ref={headerRef}>
            <div className="container">
                <a><img className="logo_section" src={logo} alt="logo"/></a>
                <ul id="navItems">
                   {
                    navLink.map((links, index)=>
                    <li key={index}><NavLink to={links.path}>{links.display}</NavLink></li>
                    )
                   }
                </ul>
                <div className="auth_section">
                   <img src={profile_pic} alt="profile image"/>
                   <NavLink to={"/login"} className="auth-details">Login</NavLink>
                </div>

                <button id="open_nav"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg></button>
                <button id="close_nav"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
            </div>
       </header> */}
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
                                <button key={index} class="flex p-6 cursor-pointer text-base font-semibold leading-5" type="button" data-headlessui-state="open"><Link to={links.path}>{links.display}</Link></button>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="text-slate-900">
                            {/* <button>Login</button> */}
                            <div className="text-2xl border-2 border-solid border-slate-600 p-1 cursor-pointer rounded-full cursor-pointer" onClick={handleMenu}>
                                <FaUser />
                            </div>
                            { showMenu && 
                                <div className="absolute bg-white py-3 px-2 shadow drop-shadow-md flex flex-col text-base font-normal leading-6">
                                    <Link to={"/setting"}><span className="whitespace-nowrap cursor-pointer">Setting</span></Link>
                                    <span className="whitespace-nowrap cursor-pointer">Logout</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
       </nav>
       </>
    );
}

export default Header;