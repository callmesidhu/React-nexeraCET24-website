import React from 'react';
import './P1Content.css';

function P1Content() {
  return (
    <div class="px-10">
         <video controls width="100%" autoplay="autoplay" loop muted  playsinline class="video-control">
      <source src="https://d360zdw5tkn3j9.cloudfront.net/Template_Block_Assets/Template_sample_clips/one_click_preview/production/neon_logo_reveal_production_story_20159_16_9_1639654762326_SD5.mp4" type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>

    </div>
  )
}

export default P1Content
