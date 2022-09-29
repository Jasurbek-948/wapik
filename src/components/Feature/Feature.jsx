import React from 'react'
import './Feature.css'
import object from '../image/Object.png'
import smart from '../image/Smart.png'
import vector from '../image/Vector.png'
import globus from '../image/globus.png'
import pen from '../image/pen.png'
import lump from '../image/lump.png'
import cloud from '../image/cloud.png'

const Feature = () => {
  return (
    <div className='container'>
        <div className='box'>
            <div className='title'>Best of our features</div>
            <div className='line1'></div>
            <div className='box-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            </div>
        </div>
    <div className='vector'>
        <div className="row text-center">
            <div className="col">
                <img src={smart} alt="" />
                <div className='col-title'>
                    Ionicons
                </div>
                <div className='col-text'>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem.
                </div>
            </div>
            <div className="col">
                <img src={vector} alt="" />
                <div className='col-title'>
                    Creative Design
                </div>
                <div className='col-text'>
                    Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </div>
            </div>
            <div className="col">
                <img src={object} alt="" />
                <div className='col-title'>
                    Photoshop and Sketch
                </div>
                <div className='col-text'>
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna.
                </div>
            </div>
        </div>
    </div>
    <div className='line-group'>
        <div className='line2'></div>
        <div className='line3'></div>
    </div>
    
    <div>
        <div className='row'>
            <div className="col">
                <div>
                    <div className='service'>
                        <div className='service-img'>
                            <img src={globus} alt="" />
                        </div>
                        
                        <div className='col-title1'>Cross Browser Compatibility</div>
                    </div>
                    
                    <div className='col-text'>Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus.</div>
                </div>
                <div>
                    <div className='service'>
                        <div className='service-img'>
                            <img src={pen} alt="" />
                        </div>
                        
                        <div className='col-title1'>Pixel Perfect</div>
                    </div>
                    
                    <div className='col-text'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                
            </div>
            <div className="col">
            <div>
                <div className='service'>
                    <div className='service-img'>
                        <img src={lump} alt="" />
                    </div>
                    
                    <div className='col-title1'>Creative Idea</div>
                </div>
                    
                    <div className='col-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.</div>
                </div>
                <div>
                    <div className='service'>
                        <div className='service-img'>
                            <img src={cloud} alt="" />
                        </div>
                        
                        <div className='col-title1'>Free Forever and Ever</div>
                    </div>
                    
                    <div className='col-text'>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feature