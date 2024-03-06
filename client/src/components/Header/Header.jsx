import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_health.png";
import profile_pic from "../../assets/images/profile_pic.png";
import "../Header/HeaderStyle.css";
import { useEffect, useRef } from "react";

function Header() {
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
    const headerRef = useRef(null);
    const menuRref = useRef(null);

    const handleStickyheader = () =>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header');
            }
            else {
                headerRef.current.classList.remove('sticky_header');
            }
        })
    }

    useEffect(()=>{
        handleStickyheader()
        return ()=> window.removeEventListener("scroll",handleStickyheader);
    })
    return (
       <header className="header" ref={headerRef}>
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

                {/**ADD MENU BAR ICONS FOR RESPONSIVE DEVICES */}
                {/* <button id="open_nav"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg></button>
                <button id="close_nav"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button> */}
            </div>
       </header>
    );
}

export default Header;