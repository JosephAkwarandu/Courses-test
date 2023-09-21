import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/img 2.jpg'

export default function Homesection2() {
  return (
    <div className='homesection2'>
      <div>
      <div>
        <div>
          <p>what do we do</p>
          <p>Our educational system will give you the perfect solution</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, magnam dignissimos voluptates hic, unde nobis officia veritatis quaerat dolorem assumenda cum. Ipsam temporibus et beatae voluptatum odio nemo mollitia reiciendis.</p>
      </div>
      <div>
        <div>
          <p>Digital marketing solution and experience</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eligendi?
          </p>
          <Link to='courses'>Learn more</Link>
        </div>
        <div>
          <p>UI/UX design solution and experience</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laudantium aliquam similique quos deserunt autem asperiores, ipsa illum?
          </p>
          <Link to='courses'>Learn more</Link>
        </div>
        <div>
          <p>Web and app development solution</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, excepturi veniam. Nesciunt nam reprehenderit rem repellendus quidem ad nemo omnis dolorem placeat!
          </p>
          <Link to='courses'>Learn more</Link>
        </div>
      </div>
      </div>
      <div>
      <div>
        <div>
          <p>what do we do</p>
          <p>Our educational system will give you the perfect solution</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, magnam dignissimos voluptates hic, unde nobis officia veritatis quaerat dolorem assumenda cum. Ipsam temporibus et beatae voluptatum odio nemo mollitia reiciendis.</p>
      </div>
      <div>
        <div>
          <Link>
            <div></div>
            <p>Create Account</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi cumque optio.</p>
          </Link>
          <Link>
            <div></div>
            <p>Select Courses</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repudiandae!</p>
          </Link>
          <Link>
            <div></div>
            <p>Confirmation Mail</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ipsam necessitatibus libero quibusdam quas esse?</p>
          </Link>
          <Link>
            <div></div>
            <p>Enjoy your course</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae at consequuntur ex.</p>
          </Link>
        </div>
        <div>
          <img src={img} alt='header2'/>
        </div>
      </div>
      </div>

    </div>
  )
}
