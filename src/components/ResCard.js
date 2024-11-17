import React from 'react'
import { CDN_URL } from '../utils/constant'


const ResCard = (props)=>{
    const {resData} = props
    
  return  <div className='res-card' >
   <img src={CDN_URL + resData.info.cloudinaryImageId} alt="Food Image" />

    <div>
    <h3>{resData.info.name} </h3>
    <span>{resData.info.cuisines.join(", ")}</span>
<br></br>
    <span>{resData.info.avgRating}</span>
    <br></br>
    <span>{resData.info.costForTwo}</span>
    <br></br>
    <span>{resData.info.sla.deliveryTime}minutes</span>
    </div>
    </div>
}
export default ResCard