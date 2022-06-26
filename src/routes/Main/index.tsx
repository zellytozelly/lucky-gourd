import { Link } from 'react-router-dom'

import BasicGourd from 'assets/images/mainGourd.png'
import styles from './main.module.scss'

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <p>🎁두 근 두 근🎁</p>
      <h1>박 터트리기!</h1>
      <img src={BasicGourd} alt='BasicGourd' />
      <div className={styles.mainStartLink}>
        <Link to='play'>S T A R T</Link>
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
