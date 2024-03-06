import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_health.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "../Footer/FooterStyle.css";

const socialLinks = [
    {
        path : "https://www.linkedin.com/",
        icon : <RiLinkedinFill></RiLinkedinFill>
    },
    {
        path : "https://www.youtube.com/",
        icon : <AiFillYoutube></AiFillYoutube>
    },
    {
        path : "https://github.com/",
        icon : <AiFillGithub></AiFillGithub>
    },
]

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

function Footer() {
    const year = new Date().getFullYear();
    return ( 
        <div className="footer">
            {/* <div className="container-footer">
                <div className="logo-section">
                    <img src={logo} alt="logo"/>
                    <p>Copyright @ {year} developed by Dipsha Mali all right reserved.</p>
                    <div className="social-links">
                        {socialLinks.map((link,index)=>(
                            <Link to={link.path} key={index}>
                            {link.icon}
                            </Link>
                        )) }
                    </div>
                </div>
                <div className="menu-section">
                    <h2>Quick Links</h2>
                    <ul id="navItems">
                   {
                    navLink.map((links, index)=>
                    <li key={index}><Link to={links.path}>{links.display}</Link></li>
                    )
                   }
                </ul>
                </div>
            </div> */}
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <ul class="social-icon">
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
            </ul>
            <ul class="menu">
                <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                <li class="menu__item"><a class="menu__link" href="#">About</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

            </ul>
            <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
        </div>
    );
}

export default Footer;