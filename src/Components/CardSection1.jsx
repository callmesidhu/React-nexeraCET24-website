import React from 'react'
import "./CardSection.css";
import eventCard from '../Cards/eventCard.jpeg'

function CardSection1() {
  return (
    <div>
      <h1 class='card-title'>Pre Events</h1>
    <div className='card-main-row'>
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
    </div>
  )
}

export default CardSection1

