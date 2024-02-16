import React from 'react';
import './CardSection.css';
import eventCard from '../Cards/eventCard.jpeg';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function CardSection1() {
  return (
    <div>
      <div className="flex w-full">
        <h1 className="card-title float-left w-full">Pre Events</h1>
        <div className="float-right flex pt-2 lg:mx-48 md:mx-24 sm:mx-24 lg:px-24" >
          <MdChevronLeft id="slider1" className="cursor-pointer" size={50} />
          <MdChevronRight id="slider2" className="cursor-pointer" size={50} />
        </div>
      </div>
      <div className="card-scroll-container">
        <div className="card-main-row">
          <div className="card-section">
            <div className="card-content">
              <a href="#">
                <img className="card-image" src={eventCard} alt="" />
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content">
              <a href="#">
                <img className="card-image" src={eventCard} alt="" />
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content">
              <a href="#">
                <img className="card-image" src={eventCard} alt="" />
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content">
              <a href="#">
                <img className="card-image" src={eventCard} alt="" />
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content">
              <a href="#">
                <img className="card-image" src={eventCard} alt="" />
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content">
              <a href="#">
                <img className="card-image" src={eventCard} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection1;
