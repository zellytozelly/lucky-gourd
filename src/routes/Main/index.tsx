import { BallIcon } from 'assets/svgs'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './main.module.scss'

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <h1>박 터트리기</h1>
      <BallIcon />
      <div className={styles.mainStartLink}>
        <Link to='play'>START</Link>
      </div>
      <footer className={styles.mainFooter}>
        <a href='https://velog.io/@zelly'>
          @ zelly ,<span> Thanks to wan</span>
        </a>
      </footer>
    </section>
  )
}
export default Main
