import React from "react";
import "./PopularFood.css"

let PopularFood = (props) => {
    return (
        <section className=" PopularFood-section" >
            <div className="">
                <div className="poular-img">
                    <img className="chilli-img d-none d-lg-block" src={props.PopularFoodBurger} alt="" />
                    <img className="burger-img d-none d-lg-block" src={props.PopularFoodChilli} alt="" />
                </div>
                <div className="PopularFood-heading text-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                    <span className="PopularFoodTitle"><b>{props.PopularFoodTitle}</b></span>
                    <h1 className="heading">{props.heading}</h1>
                </div>
                
                    <div className="food-items" >
                    {
                        props.food.map((dish, i) => (
                            <div className="food-item"  key={i} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                <img src={dish.dish1Img} alt={dish.dish1Name} className="img-fluid" />
                                <p className="dish-name"><b>{dish.dish1Name}</b></p>
                                <span>{dish.dish1Fee}</span>
                                <p className="dish-price"><b>{dish.dish1Price}</b></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );

}


export default PopularFood;