import React, { useRef, useState, useEffect } from 'react'
import { BsF } from 'react-icons'
import { meal } from '../../constants'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './Intro.css'

const Intro = () => {
  const vidRef = useRef()
  const [play, setPlay] = useState(true)
  const [constantPause, setConstantPause] = useState(false)

  useEffect(() => {
    let options = {
      rootMargin: '0px',
    }

    let handlePlay = (entries, observer) => {
      if (!constantPause) {
        console.log(constantPause)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlay(true)
            vidRef.current.play()
          } else {
            setPlay(false)
            vidRef.current.pause()
          }
        })
      }
    }

    let observer = new IntersectionObserver(handlePlay, options)

    observer.observe(vidRef.current)
  })

  const handleVideoPlayer = () => {
    setPlay((prevPlay) => !prevPlay)
    // setConstantPause((prevPause) => !prevPause)

    if (play) {
      setConstantPause(true)
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }
  return (
    <div className='app__video'>
      <video
        ref={vidRef}
        src={meal}
        type='video/mp4'
        loop
        controls={false}
        muted
      />

      <div
        className={
          play
            ? 'app__video-overlay_pause flex__center'
            : 'app__video-overlay_play flex__center'
        }
      >
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
