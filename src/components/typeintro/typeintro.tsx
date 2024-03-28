'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeIntro = () => {
  return (
    <TypeAnimation
      className="text-2xl md:text-5xl tracking-widest py-4"
      sequence={[
        500,
        'A Full Stack <Developer /> .',
        1000,
      ]}
      speed={10}
      repeat={Infinity}
    />
  );
};

export default TypeIntro;