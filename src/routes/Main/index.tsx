import { Link } from 'react-router-dom'

import { BallIcon } from 'assets/svgs'
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
          @ zelly ,<span> @ wan</span>
        </a>
      </footer>
    </section>
  )
}
export default Main
