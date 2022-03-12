import React, { useRef, useState } from 'react'
import { BsF } from 'react-icons'
import { meal } from '../../constants'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './Intro.css'

const Intro = () => {
  const vidRef = useRef(null)
  const [play, setPlay] = useState(false)
  const handleVideoPlayer = () => {
    setPlay((prevPlayVideo) => !prevPlayVideo)

    if (play) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }
  return (
    <div className='app__video'>
      <video src={meal} type='video/mp4' loop controls={false} muted />

      <div className='app__-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideoPlayer}
        >
          {play ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro
