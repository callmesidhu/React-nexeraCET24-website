import React from 'react';
import CS from '../Images/CarShowStock.png'
import CE from '../Images/CulturalEventStock.png'
import FM from '../Images/FleaMarketStock.png'
import GL from '../Images/GamingStock.png'
import WE from '../Images/WeaponExpoStock.png'
import './SubContent.css';


function SubContent() {

  return (
<div className="content-center w-full lg:px-32 px-10" id='overview'>
      <div className='content-list cursor-grabbing  my-24 lg:my-48' >
        <div class="gallery content-center">
          <img src={WE}></img>
          <img src={CS}></img>
          <img src={FM}></img>
          <img src={CE}></img>
          <img src={GL}></img>
            </div>
            </div>
            </div>
          
  )
}

export default SubContent
