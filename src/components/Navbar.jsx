import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src="/img/telephone.png" width={32} height={32}/>
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>Order Now!</div>
            <div className={styles.text}>123456789</div>
          </div>
        </div>
          <div className={styles.item}>
            <ul className={styles.list}>
              <li className={styles.listItem}>Home</li>
              <li className={styles.listItem}>Products</li>
              <li className={styles.listItem}>Menu</li>
              <div style={{background:"white" ,borderRadius:"50%" ,height:"100px",width:"100px", margin:"10px", padding:"10px",zIndex:"10"}}>
              <Image  src='/img/logo.svg' alt='' width="100" height="100"/>
              </div>
              <li className={styles.listItem}>Events</li>
              <li className={styles.listItem}>Blog</li>
              <li className={styles.listItem}>Contact</li>
            </ul>  
          </div>
          <div className={styles.item}>
            <div className={styles.cart}>
            <Image src='/img/cart.png' alt="" width="30px" height="30px"/>
            <div className={styles.counter}>2</div> 
            </div>
          </div>
    </div>
  )
}

export default Navbar

