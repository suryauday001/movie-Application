import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="wrapper footer">
                <div className="upperfooter">
                    <div className="container">
                        <ul>
                            <li>
                                <span class="mdi mdi-account-multiple"></span>
                                <p>Custumer Care</p>
                            </li>
                            <li>
                                <span class="mdi mdi-cash-multiple"></span>
                                <p>Booking Information</p>
                            </li>
                            <li>
                                <span class="mdi mdi-newspaper"></span>
                                <p>Newsletter</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lowerfooter">
                    <div className="container">
                        <ul>
                            <li>
                                <h5>Ticket</h5>
                                <p></p>
                            </li>
                            <li>
                                <h5>News</h5>
                                <a>Entertainment Blog</a>
                                <a>Press Release</a>
                                <a>Press Coverage</a>
                                <a>Current Openings</a>
                                <a>Contact Us</a>
                                <a>About Us</a>
                            </li>
                            <li>
                                <h5>Exclusive</h5>
                                <a>Corporate Voucher</a>
                                <a>Gift Cards</a>
                                <a>Filmy Pass my coupons</a>
                                <a>Box office Collections</a>
                                <a>Contact Us</a>
                                <a>About Us</a>
                            </li>
                            <li>
                                <h5>Help</h5>
                                <a>Sitemap</a>
                                <a>Faqs</a>
                                <a>Terms And Conditions</a>
                                <a>Privacy Policy</a>
                                <a>Report Content</a>
                            </li>
                        </ul>
                    </div>
                    <div className="container social-icon">
                        <div>
                            <a href=""><abbr><span class="mdi mdi-facebook"></span></abbr></a>
                            <a href=""><abbr><span class="mdi mdi-twitter"></span></abbr></a>
                            <a href=""><abbr><span class="mdi mdi-instagram"></span></abbr></a>
                            <a href=""><abbr><span class="mdi mdi-youtube"></span></abbr></a>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
