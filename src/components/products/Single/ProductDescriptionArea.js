import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductDescriptionArea({ product }) {
    const { category, fields } = product;
    const { each_box_contains, description,
        weight, height, width, depth, quality_checking,
        freshness_duration, when_packeting } = fields;
    if (!category) {
        return category;
    }
    return (
        <section className="product_description_area">
            <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</Link>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {description}
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h5>Width</h5>
                                        </td>
                                        <td>
                                            <h5>{width}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Height</h5>
                                        </td>
                                        <td>
                                            <h5>{height}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Depth</h5>
                                        </td>
                                        <td>
                                            <h5>{depth}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Weight</h5>
                                        </td>
                                        <td>
                                            <h5>{weight}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Quality checking</h5>
                                        </td>
                                        <td>
                                            <h5>{quality_checking === true ? 'yes' : 'noe'}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Freshness Duration</h5>
                                        </td>
                                        <td>
                                            <h5>{freshness_duration}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>When packeting</h5>
                                        </td>
                                        <td>
                                            <h5>{when_packeting}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Each Box contains</h5>
                                        </td>
                                        <td>
                                            <h5>{each_box_contains}</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="comment_list">
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-1.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <Link className="reply_btn" to="/">Reply</Link>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                    <div className="review_item reply">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-2.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <Link className="reply_btn" to="/">Reply</Link>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-3.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <Link className="reply_btn" to="/">Reply</Link>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="review_box">
                                    <h4>Post a comment</h4>
                                    <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-right">
                                            <button type="submit" value="submit" className="btn submit_btn">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row total_rate">
                                    <div className="col-6">
                                        <div className="box_total">
                                            <h5>Overall</h5>
                                            <h4>4.0</h4>
                                            <h6>(03 Reviews)</h6>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="rating_list">
                                            <h3>Based on 3 Reviews</h3>
                                            <ul className="list">
                                                <li><Link to="/">5 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</Link></li>
                                                <li><Link to="/">4 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</Link></li>
                                                <li><Link to="/">3 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</Link></li>
                                                <li><Link to="/">2 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</Link></li>
                                                <li><Link to="/">1 Star <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> 01</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_list">
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-1.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-2.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-3.png" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="review_box">
                                    <h4>Add a Review</h4>
                                    <p>Your Rating:</p>
                                    <ul className="list">
                                        <li><Link to="/"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="/"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="/"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="/"><i className="fa fa-star" /></Link></li>
                                        <li><Link to="/"><i className="fa fa-star" /></Link></li>
                                    </ul>
                                    <p>Outstanding</p>
                                    <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" id="message" rows={1} placeholder="Review" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-right">
                                            <button type="submit" value="submit" className="btn submit_btn">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
