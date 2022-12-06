import React from 'react'
import styles from './video.module.css'
import videobg from '../../assets/videos/crazykeyboard.mp4'

const Video = () => {
  return (
    <div className={styles.main}>
        <div className={styles.overlay}></div>
        <video className={styles.video} src={videobg} alt="" loop autoPlay muted/>

    </div>
  )
}

export default Video