import React from 'react'
import styles from './footer.module.css'
import { FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";


const Footer = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.followme}>Connect with me ...</h1>
    <div className={styles.wrapper}>
     
    <div className={styles.icon}>
        <div className={styles.tooltip}>LinkedIn</div>
        <span><FaLinkedinIn className={styles.image}/></span>
    </div>
   
    <div className={styles.icon}>
        <div className={styles.tooltip}>YouTube</div>
        <span><FaYoutube className={styles.image}/></span>
    </div>
    <div className={styles.icon}>
        <div className={styles.tooltip}>Github</div>
        <span><FaGithub className={styles.image}/></span>
    </div>
    <div className={styles.icon}>
        <div className={styles.tooltip}>Resume</div>
        <span><BsFillBriefcaseFill className={styles.image}/></span>
    </div>
 
</div>
    <p className={styles.copyright}>Built and created by Carin Wood &copy; 2022</p>
</div>
  )
}

export default Footer