import React from 'react';
import styles from '../styles/navbar.module.scss'
import logo from '../assets/logo-salesforce--8xl9Xx.svg'
import { data } from '../data'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      
      <div className={styles.leftdiv}>
      <img className={styles.logo} src={logo} alt=''/>
      <ul className={styles.leftlist}>
        <li>Products</li>
        <li>Resources</li>
        <li>Support</li>
        <li>Company</li>
        <li>COVID-19</li>
        <li>Salesforce+</li>
      </ul>
      </div>


      <a className={styles.subscribelink} href={data.href} >Subscribe</a>
      <a className={styles.trylink} href={data.href} >Try for free</a>
      <div className={styles.menuicon}>
        <span style={{fontSize: '2.6em'}} className="material-icons">menu</span> 
      </div>
      </div>
    </div>
  )
}
