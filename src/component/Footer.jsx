import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <footer className="container-fluid footer-bg">
            <section className="container">
                <div className="container-fluid FooterContact">
                    <div className="container FooterContact-div1">
                        <div className="row ">
                            {props.FooterContact.map((items, index) => (
                                <div key={index} className="col-12 col-md-12 col-lg-4 FooterContact-div2">
                                    <nav className="ContactIcon"><i className={items.ContactIcon}></i></nav>
                                    <div>
                                        <p className="ContactAddressTitle">{items.ContactAddressTitle}</p>
                                        <p className="ContactAddress">{items.ContactAddress}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="FooterLogo-Div">
                    <div className="FooterLogo" >
                        <img src={props.FooterLogo} alt="" />
                        <p className="FooterLogoBelow">{props.FooterLogoBelow}</p>
                        <div className="FooterSocialMedia">
                            {props.FooterSocialMedia.map((items, index) => (
                                <nav key={index}>
                                    <a href=""><i className={items}></i></a>
                                </nav>
                            ))}
                        </div>
                    </div>

                    <div className="QuickLink ">
                        <p className="QuickLinkTitle">{props.QuickLinkTitle}</p>
                        {props.QuickLinkData.map((items, index) => (
                            <ul key={index} className="p-0 QuickLinklist">
                                <li className="list-unstyled"><a className="text-decoration-none" href="">{items}</a></li>
                            </ul>
                        ))}
                    </div>

                    <div className="OurMenu ">
                        <p className="OurMenuTitle">{props.OurMenuTitle}</p>
                        {props.OurMenuData.map((items, index) => (
                            <ul key={index} className="p-0 QuickLinklist">
                                <li className="list-unstyled"><a className="text-decoration-none"  href="">{items}</a></li>
                            </ul>
                        ))}
                    </div>

                    <div className="ContactUs" >
                        <p className="ContactUsTitle">{props.ContactUsTitle}</p>
                        <p className="ContactUsTime1">{props.ContactUsTime1}</p>
                        <p className="ContactUsTime2">{props.ContactUsTime2}</p>
                        <div class="email-box">
                            <input type="email" placeholder="Your email address" required/>
                                <button type="submit">
                                    <i class="bi bi-arrow-right"></i>
                                </button>
                        </div>
                        <p className="ContactUsTerms pt-4"><input className=" pe-2" type="checkbox" name="agreement" value="yes" required />{props.ContactUsTerms} </p>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;