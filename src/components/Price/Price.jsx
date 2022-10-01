import React from 'react';

const Price = () => {
    return (
        <div>
            <div>
                <div className="title">Pricing & Plan</div>
                <div className="line1"></div>
                <div className="box-text text-center" style={{width: "480px"}}>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
                    Donec id elit non mi porta gravida at eget metus.</div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        <div>BASIC</div>
                        <div>$199</div>
                        <div>/month</div>
                        <div>Justo Fringilla
                            Mollis Sit Nullam
                            Ultricies Purus Amet
                            Cras Inceptos
                        </div>
                        <button>SELECT PLAN</button>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div>PLUS</div>
                        <div>$399</div>
                        <div>/month</div>
                        <div>Justo Fringilla
                            Mollis Sit Nullam
                            Ultricies Purus Amet
                            Cras Inceptos
                        </div>
                        <button>SELECT PLAN</button>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div>PREMIUM</div>
                        <div>$699</div>
                        <div>/month</div>
                        <div>Justo Fringilla
                            Mollis Sit Nullam
                            Ultricies Purus Amet
                            Cras Inceptos
                        </div>
                        <button>SELECT PLAN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
