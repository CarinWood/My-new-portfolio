import React from 'react'
import styles from './menu.module.css';

const Menu = () => {
  return (
    <div className={styles.wrapper}>
        <h1>Carin Wood</h1>
        <ul className={styles.list}>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Games</li>
            <li>Photography</li>
            <li>Connect</li>
        </ul>

    </div>
  )
}

export default Menu