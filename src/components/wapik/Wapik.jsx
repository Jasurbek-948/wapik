import React from 'react';
import './Wapik.css'
const Wapik = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="news1">Wapik</div>
                        <div className="box-text my-3">@: hi@wapik.com</div>
                        <div className="box-text my-3">p: +62 202 555 0117</div>
                        <div className="box-text my-3">a: 610 Overlook Circle Suite 323</div>
                        <div className="box-text my-3">Kalamazoo, MI 49009</div>
                    </div>
                    <div className="col">
                        <div className="news">Company</div>
                        <div className="box-text my-3">Home</div>
                        <div className="box-text my-3">About Us</div>
                        <div className="box-text my-3">Pricing</div>
                        <div className="box-text my-3">Contact Us</div>
                    </div>
                    <div className="col">
                        <div className="news">Others</div>
                        <div className="box-text my-3">Help & Support
                        </div>
                        <div className="box-text my-3">Privacy Policy</div>
                        <div className="box-text my-3">Terms</div>
                        <div className="box-text my-3">Sitemap</div>
                    </div>
                    <div className="col">
                        <div className="news">Newsletter</div>
                        <div className="box-text my-3">Subscribe to our newsletter and get all
                            the cool news</div>
                        <input className="wapik-input" type="email" placeholder="Enter Email"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wapik;
