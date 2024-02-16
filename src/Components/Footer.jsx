import './Footer.css';
import linkedinIcon from '../Images/linkedinIcon.png';
import instaIcon from '../Images/instaIcon.png';
import './hyperlinks.js'
import {callInstagram,callLinkedIn} from './hyperlinks.js';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='footer-left'>
        <h1 class="footer-title-main">
          Wish to sponsor us?
        </h1><br></br>
        <button class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-5 m-1 rounded-full">
          <h2 class='footer-title-sub'>Get in touch</h2>
        </button>

      </div>x
      <div className='footer-right'>
        <h1 class='footer-title-main' id='ContactUs'>
          Follow us now
        </h1><br></br>
        <button class='px-2 float-right' onClick={callInstagram} ><img src={instaIcon}></img></button>
        <button class='px-2 float-right' onClick={callLinkedIn}><img src={linkedinIcon}></img></button>
      </div>
    </div>
  )
}

export default Footer
