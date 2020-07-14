import React from 'react';
import OwlCarousel from 'react-owl-carousel';


export default function SlideLogo() {
    return (
        <OwlCarousel className="clients_slider" items={5} responsive={
            {
                0: { items: 1 }, 400: { items: 2 }, 575: { items: 3 }, 768: { items: 4 }, 992: { items: 5 }
            }
        } >
            <div className="item">
                <img src="img/clients-logo/c-logo-1.png" alt="" />
            </div>
            <div className="item">
                <img src="img/clients-logo/c-logo-2.png" alt="" />
            </div>
            <div className="item">
                <img src="img/clients-logo/c-logo-3.png" alt="" />
            </div>
            <div className="item">
                <img src="img/clients-logo/c-logo-4.png" alt="" />
            </div>
            <div className="item">
                <img src="img/clients-logo/c-logo-5.png" alt="" />
            </div>
        </OwlCarousel>
    )
}
