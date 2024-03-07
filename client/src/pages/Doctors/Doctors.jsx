import "../Doctors/DoctorStyle.css";
import docImage1 from "../../assets/images/4_doc.png";
import docImage2 from "../../assets/images/3_doc.png";
import docImage3 from "../../assets/images/5_doc.png";
import moreInfo from "../../assets/images/moreInfo.png";

function Doctors() {
    return ( 
        <>
        <section>
            <div className="continer">
                <h2>Find a Doctor</h2>
                <div className="searchInfo">
                    <input type="search" placeholder="search doctor" className="search-field"/>
                </div>
                <div className="doctor-wrapper">
                    <article>
                        <div className="doctor-info">
                            <img src={docImage1} alt="docImage1"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Surgeon</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage2} alt="docImage2"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Neurologist</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage3} alt="docImage3"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>General Surgeon</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage1} alt="docImage1"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Dentist</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                    <article>
                        <div className="doctor-info">
                            <img src={docImage2} alt="docImage2"/>
                            <h4>Dr. Alfaz Ahmed</h4>
                            <p>Neurologist</p>
                            <img className="moreInfo" src={moreInfo} alt="moreInfo"/>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        </>
    );
}

export default Doctors;