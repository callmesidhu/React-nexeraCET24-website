import React, { useState } from 'react';
import './SubContent.css';
import E1 from '../Images/E1.png'
import E2 from '../Images/E2.png'
import E3 from '../Images/E3.png'
import E4 from '../Images/E4.png'
import E5 from '../Images/E5.png'
import CS from '../Images/CarShow.png'
import CE from '../Images/CulturalEvents.png'
import FM from '../Images/FleaMarket.png'
import GL from '../Images/Gaming.png'
import WE from '../Images/WeaponExpo.png'

const Thumbnail = ({ src, alt, onMouseEnter, onMouseLeave }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="thumbnail"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

const FullScreenImage = ({ src, onClick }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75"
      onClick={onClick}
    >
      <img
        src={src}
        alt="Full Screen Image"
        className="max-w-full max-h-full transition-opacity duration-500"
      />
    </div>
  );
};

const SubContent = () => {
  const [fullScreenImageSrc, setFullScreenImageSrc] = useState(null);

  const handleThumbnailMouseEnter = (imageSrc) => {
    setFullScreenImageSrc(imageSrc);
  };

  const handleThumbnailMouseLeave = () => {
    setFullScreenImageSrc(null);
  };

  const handleFullScreenImageClick = () => {
    setFullScreenImageSrc(null);
  };

  return (
    <div className="flex ">
      <div className='content-list cursor-grabbing '>
    <div class="flex flex-wrap p-5 md:p-12 lg:p-12 xl:p-24  lg:m-40 md:mx-0 sm:mx">
      <div class="w-1/5 relative">
      <Thumbnail src={E1} alt="E1" onMouseEnter={() => handleThumbnailMouseEnter(WE)} onMouseLeave={handleThumbnailMouseLeave} />
      </div>
      <div class="w-1/5 relative">
      <Thumbnail src={E2} alt="E2" onMouseEnter={() => handleThumbnailMouseEnter(CS)} onMouseLeave={handleThumbnailMouseLeave} />
      </div>
      <div class="w-1/5 relative">
      <Thumbnail src={E3} alt="E3" onMouseEnter={() => handleThumbnailMouseEnter(FM)} onMouseLeave={handleThumbnailMouseLeave} />
      </div>
      <div class="w-1/5 relative">
      <Thumbnail src={E4} alt="E4" onMouseEnter={() => handleThumbnailMouseEnter(CE)} onMouseLeave={handleThumbnailMouseLeave} />
      </div>
      <div class="w-1/5 relative">
      <Thumbnail src={E5} alt="E5" onMouseEnter={() => handleThumbnailMouseEnter(GL)} onMouseLeave={handleThumbnailMouseLeave} />
      </div>
      
      {fullScreenImageSrc && <FullScreenImage src={fullScreenImageSrc} onClick={handleFullScreenImageClick} />}
    </div>
    </div>
    </div>
  );
};

export default SubContent;
