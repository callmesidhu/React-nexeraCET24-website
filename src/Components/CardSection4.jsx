import React from 'react';
import './CardSection.css';
import Inauguration from '../Cards/Inauguration.jpeg';
import CETunes from '../Cards/CETunes.jpeg';
import CulturalNight from '../Cards/CulturalNight.jpeg';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


function xScrollLeft(){
  var left = document.querySelector(".xScroll4");
  left.scrollBy(500,0)
}
function xScrollRight(){
  var right = document.querySelector(".xScroll4");
  right.scrollBy(-500,0)
  
}

function CardSection4() {
  return (
        <div>
        <div className="flex w-full" id="events">
          <h1 className="card-title float-left w-full mt-16">Other Sessions</h1>
          <div className="float-right flex pt-2 lg:mx-48 md:mx-24 sm:mx-5 lg:px-24 xsm:mx-0 xsm:px-0" >
            <button onClick={xScrollRight}>
            <MdChevronLeft id="slider1" className="cursor-pointer" size={50} />
            </button>
            <button onClick={xScrollLeft}>
            <MdChevronRight id="slider2" className="cursor-pointer" size={50} />
            </button>
          </div>
        </div>
        <div className="card-scroll-container lg:p-3">
          <div className="card-main-row xScroll4 lg:mx-52 md:mx-32 sm:mx-20 xsm:mx-12">
           
           
           
           
            <div className="card-section">
              <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
                <a href="#">
                  <button>
                  <img className="card-image" src={Inauguration} alt="" />
                  </button>
                </a>
              </div>
            </div>
            <div className="card-section">
              <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
                <a href="#">
                  <button>
                  <img className="card-image" src={CETunes} alt="" />
                  </button>
                </a>
              </div>
            </div>
            <div className="card-section">
              <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
                <a href="#">
                  <button>
                  <img className="card-image" src={CulturalNight} alt="" />
                  </button>
                </a>
              </div>
            </div>
            
          
            
  
  
          </div>
        </div>
      </div>
  )
}

export default CardSection4
