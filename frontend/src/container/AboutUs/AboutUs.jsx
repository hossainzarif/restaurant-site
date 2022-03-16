import React from 'react'
import { images } from '../../constants'

import './AboutUs.css'

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'
  >
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img' />
        <p className='p__opensans'>
          Craving some delicious Greek food? Maybe you’re in the mood for a
          juicy steak? No matter what kind of meal you have in mind, The Spot
          Restaurant is ready to prepare it for you. Since 1973, The Spot
          Restaurant has been the go-to diner for residents of Binghamton, NY.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about knife' />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img' />
        <p className='p__opensans'>
          Craving some delicious Greek food? Maybe you’re in the mood for a
          juicy steak? No matter what kind of meal you have in mind, The Spot
          Restaurant is ready to prepare it for you. Since 1973, The Spot
          Restaurant has been the go-to diner for residents of Binghamton, NY.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
)

export default AboutUs
