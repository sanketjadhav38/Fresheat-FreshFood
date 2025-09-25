import React from "react";
import "./Offer.css";

const Offer = (props) => {
    return (
        <section className="container-fluid offer-section ">
            <div className="row offer-div ">
                {props.offer.map((item, index) => (
                    <div className="col-12 col-lg-4 offer-card" key={index} data-aos="fade-up" data-aos-duration="2500">
                            <div className="">
                                <span className="offertitle">{item.offertitle}</span>
                                <p className="offerDish">{item.offerDish}</p>
                                <span className="offertime">{item.offerTime}</span>
                                <nav className="offerBtn">
                                    <a href="#">{item.offerBtn}</a>
                                </nav>
                            </div>
                            <div className="offerimg">
                                <img src={item.offerimg} alt={item.offerDish} className="img-fluid" />
                            </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Offer;