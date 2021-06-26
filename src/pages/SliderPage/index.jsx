import React from 'react';
import Slider from '../../components/Slider';
import { SliderData } from '../../components/Slider/SliderData';


function SliderPage () {
  return (
    <section>
      <h1>Slider</h1>
      <Slider slides={SliderData} />
    </section>
  );
}

export default SliderPage;