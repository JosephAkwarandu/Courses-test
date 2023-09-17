import React from 'react'

import Homesection1 from './homesections/homesection1';
import Homesection2 from './homesections/homesection2 ';
import Homesection3 from './homesections/homesection3 ';
import Homesection4 from './homesections/homesection4';
import Homesection5 from './homesections/homesection5';
import Homesection6 from './homesections/homesection6';


export default function Home() {
  return (
    <div className='homesections'>
      <section className='homesection1'> < Homesection1 /> </section>
      <section className='homesection2'> < Homesection2 /> </section>
      <section className='homesection3'> < Homesection3 /> </section>
      <section className='homesection4'> < Homesection4 /> </section>
      <section className='homesection5'> < Homesection5 /> </section>
      <section className='homesection6'> < Homesection6 /> </section>
    </div>
  )
}
