import React from 'react'
import './Feature.css'
import object from '../image/Object.png'
import smart from '../image/Smart.png'
import vector from '../image/Vector.png'

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
                    <img src="" alt="" />
                    <div>Cross Browser Compatibility</div>
                    <div>Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus.</div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>Pixel Perfect</div>
                    <div>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                
            </div>
            <div className="col">
            <div>
                    <img src="" alt="" />
                    <div>Creative Idea</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.</div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>Free Forever and Ever</div>
                    <div>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feature