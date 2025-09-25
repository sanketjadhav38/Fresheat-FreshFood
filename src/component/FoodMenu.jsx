import React from "react";
import "./FoodMenu.css";

const FoodMenu = (props) => {
    return (
        <section className="container-fluid FoodMenuSection">

            <div className="container FoodMenuDiv">

                <div className="FoodMenuHeading" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                    <p><b>{props.FoodMenuTitle}</b></p>
                    <h6>{props.FoodMenuHeading}</h6>
                </div>

                <div className="FoodMenuChoice">
                    {props.FoodMenuChoice.map((items,j)=>(
                        <div key={j} className="FoodMenuChoiceDiv">
                            <img className="FoodMenuChoiceImg" src={items.FoodMenuChoiceImg} alt="" />
                            <p className="FoodMenuChoicePara"><b>{items.FoodMenuChoiceName}</b></p>
                        </div>
                    ))}
                </div>

                <div className="FoodMenuCard">

                    {props.FoodMenuCard.map((items,index)=>(
                        <div key={index} className="FoodMenuCardDiv" data-aos="flip-down" data-aos-duration="2000">
                            <img className="FoodMenuCardImg " src={items.FoodMenuImg} alt="" />
                            <div className="FoodMenuCardName ">
                                <p className="FoodMenuName">{items.FoodMenuName}</p>
                                <p className="FoodMenuPara">{items.FoodMenuPara}</p>
                            </div>
                            <div className="FoodMenuPrice">
                                <p><b>{items.FoodMenuPrice}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="FoodMenuAdd ">
                <p className="FoodMenuAddSection">
                    {props.FoodMenuAdd1}
                </p>
            </div>
        </section>
    );
}

export default FoodMenu;
