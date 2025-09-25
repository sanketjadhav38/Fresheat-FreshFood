import React from "react";
import "./TodaySpecial.css";

const TodaySpecial=(props)=>{
    return(
        <section className=" container-fluid TodaySpecial-section">
            <div className="row TodaySpecial-div" data-aos="zoom-in-down" data-aos-duration="3000">
                <div className="d-lg-none TodaySpecialImg1">
                    <img className="img-fluid" src={props.TodaySpecialImg} alt="" />
                </div>
                <div className="col-lg-6">
                    <img className="d-none d-lg-block img-fluid TodaySpecialStickerUp" src={props.TodaySpecialStickerUp} alt="" />
                    <p className="TodaySpecialTitle">{props.TodaySpecialTitle}</p>
                    <h5 className="TodaySpecialHeading">{props.TodaySpecialHeading}</h5>
                    <p className="TodaySpecialTime">{props.TodaySpecialTime}</p>
                    <nav className="TodaySpecialBtn">
                        <a href="">{props.TodaySpecialBtn}</a>
                    </nav>
                    <img className="d-none d-lg-block img-fluid TodaySpecialStickerDown" src={props.TodaySpecialStickerUp} alt="" />
                </div>

                <div className="d-none d-lg-block col-lg-6 text-end">
                    <img className="img-fluid" src={props.TodaySpecialImg} alt="" />
                    <img className="img-fluid TodaySpecialTomato" src={props.TodaySpecialTomato} alt="" />
                </div>
            </div>
        </section>
    );
}

export default TodaySpecial;