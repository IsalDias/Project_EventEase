import React from 'react';
import Home_Carrousel from '../../../Components/Home_Carrousel/Home_Carrousel';
import './ann_hero.css'



const Ann_Hero = () => {
  return (
    <div>
      <div style={{ position: 'relative', top: '100px', zIndex:"100" }}>
        <p className='banner_1'>Unlock the World of EventEase</p>
      </div>

      <div>
        <Home_Carrousel/>
      </div>
    </div>
  );
};

export default Ann_Hero;
