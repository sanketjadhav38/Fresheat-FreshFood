import React from "react";
import "./Navigation.css";

let Navigation = (props) => {
    const navItem = props.nav
    const navIcons = props.icon
    return (
        <div className="main-nav" >

            <a href=""><img className="logo" src={props.logos} alt="" /></a>

            <ul className="nav-ul">
                {navItem.map((link, i) => (
                    <li key={i} className="nav-li"><a href="" className="nav-a">{link}</a></li>
                ))}
            </ul>

            <div className="nav-icons">
                {navIcons.map((icon, j) => (
                    <a href="" key={j}><i className={icon}></i></a>
                ))}

                <a href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" ><i className={props.ListIcon}></i></a>

                <div class="offcanvas offcanvas-top bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasTopLabel">
                            <a href=""><img className="logo" src={props.logos} alt="" /></a>
                        </h5>
                        <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul className="">
                            {navItem.map((link, i) => (
                                <li key={i} className="nav-li list-unstyled"><a href="" className="nav-a">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Navigation;
