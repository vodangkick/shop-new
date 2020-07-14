import React from 'react';
import { Link } from 'react-router-dom';

export default function TitleMain(props) {
    let { title, children, linkSite } = props;
    linkSite = linkSite ? <Link className="main_btn" to="/shop">Shop Now</Link> : ''
    return (
        <div className="main_title">
            <h2>{title}</h2>
            <p>{children}</p>
            {linkSite}
        </div>
    )
}
