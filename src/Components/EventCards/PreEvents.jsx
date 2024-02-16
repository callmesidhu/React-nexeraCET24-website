import "../CardSection.css";
import eventCard from '../../Cards/eventCard.jpeg'
import React from 'react'

function PreEvents() {
  return (
    <div className="">
      <div className='card-section '>
      <a href="#">
        <img class="card-image" src={eventCard} alt="" />
      </a>
      </div>

      <div className='card-section '>
      <a href="#">
        <img class="card-image" src={eventCard} alt="" />
      </a>
      </div>

      <div className='card-section'>
      <a href="#">
        <img class="card-image" src={eventCard} alt="" />
      </a>
      </div>

      <div className='card-section'>
      <a href="#">
        <img class="card-image" src={eventCard} alt="" />
      </a>
      </div>

      <div className='card-section'>
      <a href="#">
        <img class="card-image" src={eventCard} alt="" />
      </a>
      </div>

      <div className='card-section'>
      <a href="#">
        <img class="card-image" src={eventCard} alt="" />
      </a>
      </div>
    </div>
  )
}

export default PreEvents
