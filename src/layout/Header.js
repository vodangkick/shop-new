import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../contexts/ProductProvider';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';


export default class Header extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <header className="header_area" >
                <div className="top_menu row m0">
                    <div className="container">
                        <div className="float-left">
                            <Link to="/">support@colorlib.com</Link>
                            <Link to="/">Welcome to Catalouge</Link>
                        </div>
                        <div className="float-right">
                            <ul className="header_social">
                                <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                                <li><Link to="/"><i className="fa fa-dribbble" /></Link></li>
                                <li><Link to="/"><i className="fa fa-behance" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            <Link className="navbar-brand logo_h" to="/"><img src="img/logo.png" alt="" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active"><Link className="nav-link" to="/" >Home</Link></li>
                                    <li className="nav-item">
                                        <Link to="/shop" className="nav-link">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/blog" className="nav-link">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <ProductConsumer>
                                        {value => <li className="nav-item">
                                            <Link to="/cart" className="cart">({value.cart.length})<i className="lnr lnr lnr-cart" /></Link>
                                        </li>
                                        }
                                    </ProductConsumer>
                                    <li className="nav-item"><Link to="/shop" className="search"><i className="lnr lnr-magnifier" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}
