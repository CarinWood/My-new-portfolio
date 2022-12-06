import React from 'react'
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.box2}>
    <section className={styles.textbox}>
      <h1 className={styles.headline}>MEET CARIN</h1>
      <h2 className={styles.subtext}><i>FULLSTACK DEVELOPER</i></h2>
      <h2 className={styles.subtext}><i>CREATIVE GAME DEVELOPER</i></h2>
      <p className={styles.divider}>
        -------------------------------------------------
      </p>
      <p className={styles.text}>
        I'm a full stack developer located in Gothenburg, Sweden. I design and
        build web sites using Javascript and Typescript. 
      </p>
      <p className={styles.text}> I've always been
        someone who has both a creative and a logical side. When I discovered
        web development, I realized it would be the perfect fit for me. I can
        use my creative side to design and my logical side to code. 
      </p>
      <p className={styles.text}>
        I'm
        interested in the entire full stack spectrum and would love to work on
        ambitious projects together with positive people.
      </p>
     
    </section>
    <section className={styles.imagebox}>
      <img className={styles.img} src="../../assets/images/profilephoto.jpg" alt="" />
      <div className={styles.whiteBorder}>
          <button className={styles.connect}>CONNECT</button>
      </div>
    </section>
  </div>
  )
}

export default About