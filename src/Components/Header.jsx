import React from 'react'
import "./Header.css";
import text from '../Images/text.png';
import {Order} from './hyperlinks.js';
import dictationarySet from '../Images/dictationarySet.png';
import { Link } from 'react-scroll';
import { BrowserRouter } from 'react-router-dom';
import './hyperlinks.js'




function Header() {
  return (
    <div>
      <div className='intro-content pt-12 md:mb-12'>
        
<div id='intro-div' class="lg:w-6/12 md:mx-24 sm:mx-12 mx-12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white dark:border-white dark:hover:bg-white">
<h1 class="intro-title mb-2 tracking-tight text-gray-900 dark:text-gray-900 ">Nexera</h1>
<div className='intro-button-div content-centre'>
  <BrowserRouter>
  <Link 
      to="overview" 
      smooth={true} 
      offset={50} 
      duration={2000} 
      
    >
<button class="bg-blue-100 hover:bg-blue-200 text-gray-900 font-bold py-2 px-4 m-2 rounded-full" >

      Overview
    

</button>
</Link>
<Link 
    
      to="events" 
      smooth={true} 
      offset={50} 
      duration={2000} 
      
    >
<button class="bg-blue-100 hover:bg-blue-200 text-gray-900 font-bold py-2 px-4 m-2 rounded-full" >

      Events
    

</button>
</Link>
<Link 
    
      to="events" 
      smooth={true} 
      offset={50} 
      duration={2000} 
      
    >
<button class="bg-blue-100 hover:bg-blue-200 text-gray-900 font-bold py-2 px-4 m-2 rounded-full" >


      Pre Events
    

</button>
</Link>
<button class="bg-blue-100 hover:bg-blue-200 text-gray-900 font-bold py-2 px-4 m-2 rounded-full" onClick={Order} >
  T-Shirt
</button>
<Link 
      to="contact" 
      smooth={true} 
      offset={50} 
      duration={2000} 
      
    >
<button class="bg-blue-100 hover:bg-blue-200 text-gray-900 font-bold py-2 px-4 m-2 rounded-full">


      Contact
   

</button>
</Link>
</BrowserRouter>

</div>
<hr></hr>
<img class='pl-8' src={dictationarySet}></img>
<p class="pl-12 font-normal text-gray-900 dark:text-gray-900">1.Department fest of Industrial Engineering branch of College of Engineering Trivandrum. It is an assemblage of industrial engineering and management practitioners spanning Kerala, with future aspirations of nationwide expansion. Facilitating workshops and discussion sessions aimed at broadening horizons, with participation from eminent figures in the industrial realm.<br/><br/>2.Beginning of the next era of industrial engineering branch.</p>

</div>

      </div>
      <div className='space'>

      </div>
      <div className='image-div md:mb-24 sm:mb-24'>
        <br/>
        <br/>
      <img src={text}></img>
      </div>
    </div>
  )
}

export default Header
