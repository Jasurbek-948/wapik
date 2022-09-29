import React from 'react'
import tick from '../image/tick.png'
import './Templete.css'
const Templete = () => {
  return (
    <div className='container temp'>
        <div>
            <div className='title'>Looking for the perfect template to use?</div>
            <div className='line1'></div>
            <div className='box-text'>Donec id elit non mi porta gravida at eget metus.</div>
        </div>
        <div className='temp-item'>
            
            <div className='temp-inner'>
                <div className='title'>Responsive Ready</div>
                <div className='temp-text box-text'>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper.
                </div>
                <div>
                    <div className='d-flex my-3'>
                        <div>
                            <img src={tick} alt="" />
                        </div>
                        <div className='mx-3 box-text'>
                            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                        </div>
                    </div>
                    <div className='d-flex my-3'>
                        <div>
                            <img src={tick} alt="" />
                        </div>
                        <div className='mx-3 box-text'>
                            Donec id elit non mi porta gravida at eget metus.
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>

    </div>
   
  )
}

export default Templete;