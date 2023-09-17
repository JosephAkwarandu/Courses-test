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
      <section> < Homesection1 /> </section>
      <section> < Homesection2 /> </section>
      <section> < Homesection3 /> </section>
      <section> < Homesection4 /> </section>
      <section> < Homesection5 /> </section>
      <section> < Homesection6 /> </section>
    </div>
  )
}
