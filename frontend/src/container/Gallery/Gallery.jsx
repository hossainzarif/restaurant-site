import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css'
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRight,
  BsArrowRightShort,
} from 'react-icons/bs'

const allimage = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
]

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direct) => {
    const { current } = scrollRef
    if (direct === 'left') {
      console.log('ff')
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'> Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        </p>
        <button type='button' className='custom__button'>
          Show More
        </button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {allimage.map((image, index) => (
            <div
              className='app__gallery-images_card flex__center'
              key={index + 1}
            >
              <img src={image} alt='gallery image' />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
