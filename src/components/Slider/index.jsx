import React, {useState} from 'react';
import SliderData from './SliderData';
import style from "./Slider.module.sass";

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const length = slides.length


   return (
     <>
     {SliderData.map((slide, index) =>{
       return <img src={slide.image} alt = 'nature image' />
     })}
     </>
   );
};

export default Slider;
