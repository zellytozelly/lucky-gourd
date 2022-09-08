import { Link } from 'react-router-dom'
import styles from './main.module.scss'

import { useGA } from 'hooks'
import BasicGourd from 'assets/images/mainGourd.webp'

const Main = () => {
  const { gaEvent } = useGA()

  const handleFooterClick = () => {
    gaEvent({ action: 'developer-blog', data: { event: 'click' } })
  }

  return (
    <section className={styles.mainContainer}>
      <p>🎁두 근 두 근🎁</p>
      <h1>박 터트리기!</h1>
      <img src={BasicGourd} alt='BasicGourd' />
      <div className={styles.mainStartLink}>
        <Link to='play'>S T A R T</Link>
      </div>
      <footer className={styles.mainFooter}>
        <a href='https://velog.io/@zelly/about' onClick={handleFooterClick}>
          @ zelly ,<span> @ wan</span>
        </a>
      </footer>
    </section>
  )
}
export default Main
