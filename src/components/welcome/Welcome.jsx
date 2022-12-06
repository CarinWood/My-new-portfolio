import React from 'react'
import styles from './welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.box1}>
        <div className={styles.textbox}>
        <h1 className={styles.headertext}>Welcome.</h1>
        <h1 className={styles.headertext}> Let's <span className={styles.grow}>Grow</span> together.</h1>
        <div className={styles.btn}>See my projects</div>
        </div>
        <div className={styles.gradient}></div>
    </div>
  )
}

export default Welcome