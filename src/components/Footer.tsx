import React from 'react'

const Footer = () => {
    return (
        <footer className="footer_widgets">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widgets_container">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="#">Returns</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widgets_container">
                                <h3>Extras</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">Brands</a></li>
                                        <li><a href="#">Gift Certificates</a></li>
                                        <li><a href="#">Affiliate</a></li>
                                        <li><a href="#">Specials</a></li>
                                        <li><a href="contact.html">Site Map</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="widgets_container contact_us">
                                <h3>Contact Us</h3>
                                <div className="footer_contact">
                                    <p>Address: 6688 Princess Road, London, Greater London BAS 23JK, UK</p>
                                    <p>Phone: <a href="tel:+(+012)800456789-987">(+012) 800 456 789 - 987</a> </p>
                                    <p>Email: demo@example.com</p>
                                    <ul>
                                        <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" title="google-plus"><i className="fa fa-google-plus" /></a></li>
                                        <li><a href="#" title="facebook"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" title="youtube"><i className="fa fa-youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="widgets_container newsletter">
                                <h3>Join Our Newsletter Now</h3>
                                <div className="newleter-content">
                                    <p>Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
                                    <div className="subscribe_form">
                                        <form id="mc-form" className="mc-form footer-newsletter">
                                            <input id="mc-email" type="email" autoComplete="off" placeholder="Enter you email address here..." />
                                            <button id="mc-submit">Subscribe !</button>
                                        </form>
                                        {/* mailchimp-alerts Start */}
                                        <div className="mailchimp-alerts text-centre">
                                            <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                            <div className="mailchimp-success" />{/* mailchimp-success end */}
                                            <div className="mailchimp-error" />{/* mailchimp-error end */}
                                        </div>{/* mailchimp-alerts end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer