import React from 'react'
import styles from './menu.module.css';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.wrapper}>
        <h1>Carin Wood</h1>
        <ul className={styles.list}>
            <li><Link to="/home">Home</Link></li>
            <li>About</li>
            <li>Projects</li>
            <li>Games</li>
            <li>Photography</li>
            <li><Link to="/connect">Connect</Link></li>
        </ul>

    </div>
  )
}

export default Menu