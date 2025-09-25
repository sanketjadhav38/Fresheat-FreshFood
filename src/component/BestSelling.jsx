import React from "react";
import "./BestSelling.css";

const BestSelling = (props) => {
    return (
        <section className="BestSelling-section container-fluid">
            <div className="BestSelling-div1 text-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" >
                <span className="BestSellingTitle">{props.BestSellingTitle}</span>
                <h4 className="BestSellingHeading" >{props.BestSellingHeading}</h4>
            </div>
                <div className="row">
                    {props.BestSellingData.map((items, index) => (
                    <div className="BestSelling-div2 text-center col-12 col-md-6 col-lg-2"  key={index} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className="dishLike-div">
                            <div className="dishLike" ><i className={items.dishLike}></i></div>
                        </div>
                        <img className="dishImg img-fluid" src={items.dishImg} alt="" />
                        <p className="dishName" >{items.dishName}</p>
                        <p className="dishFee" >{items.dishFee}</p>
                        <span className="dishPrice" >{items.dishPrice}</span>
                    </div>
                ))}
                </div>
            <div className="BestSellingBtn-div">
                <nav className="BestSellingBtn"><a href="">VEIW ALL ITEMS</a></nav>
            </div>
        </section>
    );
}


export default BestSelling;
