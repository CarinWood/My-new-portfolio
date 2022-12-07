import styles from './styles/connect.module.css';
import { FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Connect = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.imageSection}>
          <div className={styles.textbox}>
              <h1 className={styles.headline}>Connect</h1>
              <p className={styles.subtext}>I would love to connect with you. Please fill out the form and I'll get in touch with you shortly</p>
              <p className={styles.divider}>-------------------------------</p>
              
              <div className={styles.iconContainer}>
                  <div className={styles.icon}>
                      <span><FaLinkedinIn className={styles.image}/></span>
                  </div>

                  <div className={styles.icon}>
                      <span><FaYoutube className={styles.image}/></span>
                  </div>

                  <div className={styles.icon}>
                      <span><FaGithub className={styles.image}/></span>
                  </div>

                  <div className={styles.icon}>
                      <span><BsFillBriefcaseFill className={styles.image}/></span>
                    </div>
              </div>
          </div>
      </section>

    </div>
  )
}

export default Connect