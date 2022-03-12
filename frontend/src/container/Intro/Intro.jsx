import React, { useRef, useState } from 'react'
import { BsF } from 'react-icons'
import { meal } from '../../constants'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './Intro.css'

const Intro = () => {
  const vidRef = useRef(null)
  const [play, setPlay] = useState(false)

  return (
    <div className='app__video'>
      <video src={meal} type='video/mp4' loop controls={false} muted />

      <div className='app__-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center'>
          <BsFillPlayFill />
        </div>
      </div>
    </div>
  )
}

export default Intro
