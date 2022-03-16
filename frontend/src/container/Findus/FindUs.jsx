import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'
const FindUs = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='headtext__cormorant'>Find Us</h1>

      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
      </p>
      <p className='p__cormorant' style={{ color: '#dcca87' }}>
        Opening Hours
      </p>
      <p className='p__opensans' style={{ margin: '1rem 0' }}>
        Sat-wed 10:00 am - 9:00pm
      </p>
      <p className='p__opensans' style={{ margin: '0.5rem 0' }}>
        Fri-Sat 12:00 pm - 9:00pm
      </p>
      <p className='p__opensans' style={{ margin: '1rem 0 2rem ' }}>
        Thursday off{' '}
      </p>
      <button type='button' className='custom__button'>
        Visit Us{' '}
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='Cover image' />
    </div>
  </div>
)

export default FindUs
