import React from 'react';
import './Map.css'
import map from '../image/map.png'
const Map = () => {
    return (
       <div className="map">
           <div className="map-text">
               <div>
                   <div className="title">Built with High Attention to Details</div>
                   <div className="box-text w-100 my-4">
                       Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                       amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum
                       nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula
                       porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id
                       elit non mi porta gravida at eget metus.
                   </div>
               </div>

           </div>
           <div className="map-img">
               <img src={map} alt=""/>
           </div>
       </div>
    );
};

export default Map;
//


//