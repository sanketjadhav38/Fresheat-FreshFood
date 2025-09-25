import React from "react";
import "./FoodNews.css";

const FoodNews=(props)=>{
    return(
        <section className="FoodNews-Section">
            <div className="FoodNews-Div text-center container " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <p className="FoodNewsTitle"><b>{props.FoodNewsTitle}</b></p>
                <h1 className="FoodNewsHeading">{props.FoodNewsHeading}</h1>
            </div>
            <div className="FoodNews-MainDiv container" >
                {props.FoodNewsData.map((items,index)=>(
                    <div key={index} className="FoodNews-Card" data-aos="flip-left" data-aos-duration="1000">
                    <img className="FoodNewsImg img-fluid" src={items.FoodNewsImg} alt="" />
                    <div className="FoodNews-Detail" >
                        <div className="FoodNews-Caption container mt-3">
                            <span className="FoodNewsDate">{items.FoodNewsDate}</span>
                            <span className="FoodNewsAdmin">{items.FoodNewsAdmin}</span>
                            <span className="FoodNewsTags">{items.FoodNewsTags}</span>
                        </div>

                        <div className="container">
                            <p className="FoodNewsHead">{items.FoodNewsHead}</p>
                            <p className="FoodNewsRead">{items.FoodNewsRead}</p>
                        </div>
                    </div>

                </div>
                ))}
            </div>
        </section>
    );
}

export default FoodNews;