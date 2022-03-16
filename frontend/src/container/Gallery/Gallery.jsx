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

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direct) => {
    const { current } = scrollRef
    if (direct === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollRight += 300
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
        <div className='app__gallery-images_container' ref={scrollRef}></div>
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort
          className='gallery__arrow-icon'
          onClick={() => scroll('left')}
        />
        <BsArrowRightShort className='gallery__arrow-icon' />
      </div>
    </div>
  )
}

export default Gallery
