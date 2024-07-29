import "../assets/CSS/homePage.css";
import docImage1 from "../assets/images/4_doc.png";
import docImage2 from "../assets/images/3_doc.png";
import docImage3 from "../assets/images/5_doc.png";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import ServicesList from "../components/Services/ServicesList";
// import Footer from "../components/Footer/Footer";
import DoctorCard from "../components/Home/DoctorCard";

function Home() {
    return ( 
        <>
        <div className="hero_section">
            <div className="container">
                <div className="hero-container">
                    <h1>We help patients live a healthy, longer life.</h1>
                    <p className="text-section">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates optio commodi ipsum temporibus dicta, nemo natus distinctio, qui in dignissimos fugit, nesciunt harum velit cupiditate earum! Quis eligendi neque ducimus.
                    </p>
                    <button className="btn button-section">Request an Appointment</button>
                    <div className="other-information">
                        <div className="one_data"><h3>30+</h3><p>Years Of Experience</p></div>
                        <div className="two_data"><h3>15+</h3><p>Clinic Location</p></div>
                        <div className="three_data"><h3>100%</h3><p>Patient Satisfaction</p></div>
                    </div>
                </div>
                <div className="hero-images">
                    <div className="left-image-section">
                        <img src={docImage1} alt="docImage1"/>
                    </div>
                    <div className="right-image-section">
                        <img src={docImage2} alt="docImage2"/>
                        <img src={docImage3} alt="docImage3"/>
                    </div>
                </div>
            </div>
            <div className="services">
                <h2>Providing the best medical services</h2>
                <p>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                <div className="services-section">
                    <article>
                        <div className="detail-item">
                            <img src={service1} alt="service1" />
                            <h4>Find a Doctor</h4>
                            <p>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                        </div>
                    </article>
                    <article>
                        <div className="detail-item">
                            <img src={service2} alt="service1" />
                            <h4>Find a Location</h4>
                            <p>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                        </div>
                    </article>
                    <article>
                        <div className="detail-item">
                            <img src={service3} alt="service1" />
                            <h4>Book Appointment</h4>
                            <p>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                        </div>
                    </article>
                </div>
                <div className="aboutSection">
                    <div className="about-image">
                        <img src={docImage1} alt="docImage1" />
                    </div>
                    <div className="about-detail">
                        <h3>Proud to be one of the nations best</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas quibusdam aperiam culpa omnis? Mollitia dolorum, magnam ipsam asperiores voluptate dolor qui unde aut amet doloribus, alias molestiae nisi veniam?
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas quibusdam aperiam culpa omnis? Mollitia dolorum, magnam ipsam asperiores voluptate dolor qui unde aut amet doloribus, alias molestiae nisi veniam?
                        </p>
                        <button className="btn button-section">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="servicesList">
                <ServicesList/>
            </div>
            <div className="doctors-section">
                <DoctorCard/>
                <h2>Our Great Doctors </h2>
                {/* Video Time : 1:26:15  */}
                {/* <p>World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                <div className="doctor-details">
                    <article>
                        <img src={docImage1} alt="docImage1"/>
                        <h4>Dr. Alfaz Ahmed</h4>
                    </article>
                    <article>
                        <img src={docImage2} alt="docImage2"/>
                        <h4>Dr. Alfaz Ahmed</h4>
                    </article>
                    <article>
                        <img src={docImage3} alt="docImage3"/>
                        <h4>Dr. Alfaz Ahmed</h4>
                    </article>
                </div> */}
            </div>
        </div>
        </>
    );
}

export default Home;