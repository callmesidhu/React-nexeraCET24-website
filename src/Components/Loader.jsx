import React, { useEffect, useState } from 'react';
import App from '../App';
import './Loader.css';
import L1 from '../Images/Loader/L1.png';
import L2 from '../Images/Loader/L2.png';
import L3 from '../Images/Loader/L3.png';
import L4 from '../Images/Loader/L4.png';
import L5 from '../Images/Loader/L5.png';
import L6 from '../Images/Loader/L6.png';

const images = [L1, L2, L3, L4, L5, L6];

export default function Loader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); 

    const timeoutId = setTimeout(() => {
      setShowApp(true);
      clearInterval(intervalId); 
    }, 3000); 

    return () => {
      clearInterval(intervalId); 
      clearTimeout(timeoutId); 
    };
  }, []);

  if (showApp) {
    return <App />;
  }

  return (
    <div className='main'>
      <img src={images[currentImageIndex]} alt='Loader' className='loader-image' />
    </div>
  );
}
