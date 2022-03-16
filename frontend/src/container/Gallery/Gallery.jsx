import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css'
import { BsInstagram, BsArrowLeftShort, BsArrowRight } from 'react-icons/bs'

const Gallery = () => {
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
    </div>
  )
}

export default Gallery
