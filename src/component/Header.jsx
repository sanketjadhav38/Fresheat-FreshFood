import React from "react";
import "./Header.css";

let Header = (props) => {
    return (
        <section className="header-section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {props.slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="row">
                                <div className="col-6">
                                    <p className="header-welcome">{slide.carouselPara}</p>
                                    <h1 className="header-h1">{slide.carouselh1}</h1>
                                    <nav className="header-btn">
                                        <a href="#">{slide.carouselbtn}</a>
                                    </nav>
                                </div>
                                <div className="header-img col-6 d-none d-md-block">
                                    <img src={slide.carouselImg} className="d-block w-75 img-fluid" alt="..." />
                                </div>
                            </div>
                        </div>

                    ))};

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">

                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">

                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Header;