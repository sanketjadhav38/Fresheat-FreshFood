import React from "react";
import "./About.css"

const About = (props)=>{
    return(
        <section className="container-fluid about-section">
            <div className="row">
                <img className="d-none d-lg-block col-lg-4 p-0 aboutImgLeft" src={props.aboutImgLeft} alt="" />
            <div className="text-center col-lg-4 about-middle-div " >
                <span className="aboutTitle">{props.aboutTitle}</span>
                <h3 className="aboutHeading">{props.aboutHeading}</h3>
                <p className="aboutDetail">{props.aboutDetail}</p>
                <nav className="aboutBtn">
                    <a  href="">{props.aboutBtn}</a>
                </nav>
            </div>
            <img className="d-none d-lg-block col-lg-4 p-0  aboutImgRight " src={props.aboutImgRight} alt="" />
            </div>
        </section>
    );
}

export default About;
