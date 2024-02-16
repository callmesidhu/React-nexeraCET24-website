import React from 'react'
import "./CardSection.css";
import eventCard from '../Cards/eventCard.jpeg'
import { MdChevronLeft,MdChevronRight } from "react-icons/md";





function CardSection1() {

  

  return (

    <div>
      <div className='flex w-full'>
      <h1 class='card-title float-left w-100%'>Pre Events</h1>
      <div class='float-right flex pt-2 px-10'>
      <MdChevronLeft id='slider1 float-right' className='cursor-grab' size={50}/>
      <MdChevronRight id='slider2' className='cursor-grab' size={50}/>
      </div>
      </div>
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

