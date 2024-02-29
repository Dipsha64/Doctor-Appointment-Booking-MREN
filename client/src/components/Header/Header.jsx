import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_health.png";
import HeaderStyle from "../Header/HeaderStyle.css";

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
    return ( 
       <header className="header">
            <div className="container">
                <a><img className="logo_section" src={logo} alt="logo"/></a>
                <ul>
                   {
                    navLink.map((links, index)=>
                    <li key={index}><NavLink to={links.path}>{links.display}</NavLink></li>
                    )
                   }
                </ul>
            </div>
       </header>
    );
}

export default Header;