import React, { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.scss'
import logo from '../assets/logo-salesforce--8xl9Xx.svg'
import iconastro from '../assets/icon-login-astro.png'
import { data } from '../data'

export default function Navbar() {
  const [ productShown, setProductShown ] = useState(false);
  const [ resourcesShown, setResourcesShown ] = useState(false);
  const [ supportShown, setSupportShown ] = useState(false);
  const [ companyShown, setCompanyShown ] = useState(false);
  const [ covidShown, setCovidShown ] = useState(false);
  const [ salesforceShown, setSalesforceShown ] = useState(false);
  const [ menuOpen, setMenuOpen ] = useState(false);
  

  useEffect(() => {
    if (productShown || resourcesShown || supportShown || covidShown || companyShown || salesforceShown) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }, [productShown, resourcesShown, supportShown, companyShown, covidShown, salesforceShown])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      

          <img className={styles.logo} src={logo} alt=''/>

          <div className={styles.contactdiv}>

              <div className={styles.searchicon}>
                <a href={data.href}>
                  <span style={{fontSize: '1.3em'}} className="material-icons">search</span>
                </a>
              </div>
              <span className={styles.phone}>1-800-664-9073</span>
              <a className={styles.contactus} href={data.href}>Contact us</a>
              <div className={styles.logindiv}>Login<img className={styles.iconastro} src={iconastro} alt=''/>
              </div>

          </div>


          <div className={styles.navlist}>
            
            <div className={styles.navitem} onMouseEnter={() => setProductShown(true)} onMouseLeave={() => setProductShown(false)}>Products
              <div className={styles.productmenu} style={ productShown ? {display:'block'} : {display: 'none'} }>product menu</div>
            </div>
            <div className={styles.navitem} onMouseEnter={() => setResourcesShown(true)} onMouseLeave={() => setResourcesShown(false)}>Resources              
              <div className={styles.resourcesmenu} style={ resourcesShown ? {display:'block'} : {display: 'none'} }>product menu</div>
            </div>
            <div className={styles.navitem} onMouseEnter={() => setSupportShown(true)} onMouseLeave={() => setSupportShown(false)}>Support              
              <div className={styles.supportmenu} style={ supportShown ? {display:'block'} : {display: 'none'} }>product menu</div>
            </div>
            <div className={styles.navitem} onMouseEnter={() => setCompanyShown(true)} onMouseLeave={() => setCompanyShown(false)}>Company              
              <div className={styles.companymenu} style={ companyShown ? {display:'block'} : {display: 'none'} }>product menu</div>
            </div>
            <div className={styles.navitem} onMouseEnter={() => setCovidShown(true)} onMouseLeave={() => setCovidShown(false)}>COVID-19              
              <div className={styles.covidmenu} style={ covidShown ? {display:'block'} : {display: 'none'} }>product menu</div>
            </div>
            <div className={styles.navitem} onMouseEnter={() => setSalesforceShown(true)} onMouseLeave={() => setSalesforceShown(false)}>Salesforce+              
             <div className={styles.salesforcemenu} style={ salesforceShown ? {display:'block'} : {display: 'none'} }>product menu</div>
            </div>
          
          </div>


          <div className={styles.linkdiv}>
            <a className={styles.subscribelink} href={data.href} >Subscribe</a>
            <a className={styles.trylink} href={data.href} >Try for free</a>
          </div>

          <div className={styles.menuicon}>
            <span style={{fontSize: '2.6em'}} className="material-icons">menu</span> 
          </div>
          <div className={styles.menuopen} style={menuOpen ? {display:'block'} : {display:'none'}}></div>



      </div>
    </div>
  )
}
