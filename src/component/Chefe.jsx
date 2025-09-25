import React from "react";
import "./Chefe.css";

const Chefe=(props)=>{
    return(
        <section className="ChefeSection container-fluid">
            <div className="ChefeDiv container">
                <div className="ChefeTitle-div text-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                    <p className="ChefeTitle"><b>{props.ChefeTitle}</b></p>
                    <h1 className="ChefeHeading">{props.ChefeHeading}</h1>
                </div>

                <div className="ChefePerson text-center">
                    {props.ChefeData.map((items,index)=>(
                        <figure key={index} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img className="ChefeImg img-fluid" src={items.ChefeImg} alt="" />
                            <figcaption className="container">
                                <p className="ChefeName"><b>{items.ChefeName}</b></p>
                                <p className="ChefePosition">{items.ChefePosition}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Chefe;