import React from 'react'
import './CardSection.css';
import WebDesigning from '../Cards/WebDesigning.jpeg';
import BrainStorming from '../Cards/BrainStorming.jpeg' 
import PBI from '../Cards/PBI.jpeg'
import Orgami from '../Cards/Orgami.jpeg'
import Dance from '../Cards/Dance.jpeg'
import Stockmarket from '../Cards/Stockmarket.jpeg'
import LWS from '../Cards/Logistics.jpeg'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import GAI from '../Cards/GAI.jpeg'
import SC from '../Cards/SC.jpeg'
import AIDrone from '../Cards/AIDrone.jpeg'


function xScrollLeft(){
  var left = document.querySelector(".xScroll2");
  left.scrollBy(500,0)
}
function xScrollRight(){
  var right = document.querySelector(".xScroll2");
  right.scrollBy(-500,0)
  
}


function CardSection2() {
  return (
    <div>
      <div>
      <div className="flex w-full" id='events'>
        <h1 className="card-title float-left w-full mt-16">Workshops</h1>
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
        <div className="card-main-row xScroll2 lg:mx-52 md:mx-32 sm:mx-20 xsm:mx-12">
         
         
         
         
          
        <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={AIDrone} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={BrainStorming} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={PBI} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a  href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={WebDesigning} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a  href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={Dance} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a  href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={Orgami} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a  href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={Stockmarket} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={LWS} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={GAI} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets" target='_blank'>
                <button>
                <img className="card-image" src={SC} alt="" />
                </button>
              </a>
            </div>
          </div>
        
         
        
          


        </div>
      </div>
    </div>
    </div>
  )
}

export default CardSection2
