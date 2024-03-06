import React from "react";
import "../../assets/CSS/servicesList.css";

function ServicesList() {
    return ( 
        <>
        <div className="services-list-section">
            <h2>Our Medical Services</h2>
            <p>World-class care for everyone. Our health system offers unmatched, experts health care.</p>
            <div className="list-wrapper">
                <article>
                    <h3>Cancer Care</h3>
                    {/* <p>World-class care for everyone. Our health system offers unmatched, experts health care. From the lab to clinic</p> */}
                </article>
                <article>
                    <h3>Labor & Delivery</h3>
                    {/* <p>World-class care for everyone. Our health system offers unmatched, experts health care. From the lab to clinic</p> */}
                </article>
                <article>
                    <h3>Heart & Vascular</h3>
                    {/* <p>World-class care for everyone. Our health system offers unmatched, experts health care. From the lab to clinic</p> */}
                </article>
                <article>
                    <h3>Mental Health</h3>
                    {/* <p>World-class care for everyone. Our health system offers unmatched, experts health care. From the lab to clinic</p> */}
                </article>
                <article>
                    <h3>Neurology</h3>
                    {/* <p>World-class care for everyone. Our health system offers unmatched, experts health care. From the lab to clinic</p> */}
                </article>
                <article>
                    <h3>Burn Treatment</h3>
                    {/* <p>World-class care for everyone. Our health system offers unmatched, experts health care. From the lab to clinic</p> */}
                </article>
            </div>
        </div>
        </>
    );
}

export default ServicesList;