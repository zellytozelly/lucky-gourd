import { Link, NavLink } from 'react-router-dom'

import { ArrowLeftIcon } from 'assets/svgs'
import styles from './gourdPlay.module.scss'

const GourdPlay = () => {
  return (
    <section className={styles.gourdPlayWrapper}>
      <header className={styles.gourdPlayHeader}>
        <Link to='/'>
          <ArrowLeftIcon />
        </Link>
      </header>
      <section>여기가 이미지야</section>
      <div className={styles.gourdOKLink}>
        <NavLink to='/'>확인</NavLink>
      </div>
    </section>
  )
}
export default GourdPlay
