import React from 'react';
import './Price.css'
import tick from '../image/tick.png'
import ball from '../image/ball.png'
const Price = () => {
    return (
        <div>
            <div>
                <div className="title">Pricing & Plan</div>
                <div className="line1"></div>
                <div className="box-text text-center" style={{width: "480px"}}>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
                    Donec id elit non mi porta gravida at eget metus.</div>
            </div>
            <div className="container">


            <div className="row my-5">
                <div className="col">
                    <div className="price">
                        <div className="premium">BASIC</div>
                        <div className="pirce-inner">$199</div>
                        <div className="month">/month</div>
                        <div><div className="box-text my-3">Justo Fringilla</div>
                            <div className="box-text my-3">Mollis Sit Nullam</div>
                            <div className="box-text my-3">Ultricies Purus Amet</div>
                            <div className="box-text my-3">Cras Inceptos</div>
                        </div>
                        <button className="plan">SELECT PLAN</button>
                    </div>
                </div>
                <div className="col">
                    <div className="price">
                        <div className="premium">PLUS</div>
                        <div className="pirce-inner">$399</div>
                        <div className="month">/month</div>
                        <div>
                            <div className="box-text my-3">Justo Fringilla</div>
                            <div className="box-text my-3">Mollis Sit Nullam</div>
                            <div className="box-text my-3">Ultricies Purus Amet</div>
                            <div className="box-text my-3">Cras Inceptos</div>

                        </div>
                        <button className="plan">SELECT PLAN</button>
                    </div>
                </div>
                <div className="col">
                    <div className="price">
                        <div className="premium">PREMIUM</div>
                        <div className="pirce-inner">$699</div>
                        <div className="month">/month</div>
                        <div><div className="box-text my-3">Justo Fringilla</div>
                            <div className="box-text my-3">Mollis Sit Nullam</div>
                            <div className="box-text my-3">Ultricies Purus Amet</div>
                            <div className="box-text my-3">Cras Inceptos</div>
                        </div>
                        <button className="plan">SELECT PLAN</button>
                    </div>
                </div>

            </div>

                <div>
                    <div className="title">Included with all Plans</div>
                    <div className="line1"></div>
                    <div className="row">
                        <div className="col">
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Maecenas faucibus mollis interdum
                                </div>
                            </div>
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Nulla vitae elit libero, a pharetra augue
                                </div>
                            </div>
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Nulla vitae elit libero, a pharetra augue
                                </div>
                            </div>

                        </div>
                        <div className="col">
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Vestibulum id ligula porta felis euismod
                                </div>
                            </div>
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Nulla vitae elit libero, a pharetra augue
                                </div>
                            </div>
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Nulla vitae elit libero, a pharetra augue
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Nulla vitae elit libero, a pharetra augue
                                </div>
                            </div>
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Nulla vitae elit libero, a pharetra augue
                                </div>
                            </div>
                            <div className="price-tick">
                                <div className="mx-2">
                                    <img src={tick} alt=""/>
                                </div>
                                <div>
                                    Nulla vitae elit libero, a pharetra augue
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center my-5">
                        <div>
                            <img src={ball} alt=""/>
                        </div>
                        <div className="help">
                            Need Help?
                        </div>
                        <div className="line1"></div>
                        <div className="box-text" style={{width: "509px"}}>
                            Contact our Customer Support that is always ready to help you with any possible
                            questions, problems or information.
                        </div>
                        <div className="support">
                            support@wapik.com
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Price;
