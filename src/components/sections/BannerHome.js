import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <section className="home_banner_area">
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content row">
                        <div className="col-lg-5">
                            <h3>Georgia Helmet <br />Collections!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <Link className="white_bg_btn" to="/">View Collection</Link>
                        </div>
                        <div className="col-lg-7">
                            <div className="halemet_img">
                                <img src="img/banner/helmat.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
