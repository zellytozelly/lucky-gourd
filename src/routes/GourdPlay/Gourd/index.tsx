import { NavLink } from 'react-router-dom'

import OpenGourd from 'assets/images/openGourd.png'
import styles from './gourd.module.scss'

const Gourd = () => {
  const text = '성공해서 만족하는 것은 아니래. 만족하고 있었기 때문에 성공한 거지!'

  return (
    <section className={styles.gourdContainer}>
      <section className={styles.gourd}>
        <img src={OpenGourd} alt='OpenGourd' className={styles.openGourdImg} />
        <p>
          {text.split('!')[0]}
          <span className={styles.verticalSpan}>!</span>
          {text.split('!')[1]}
        </p>
      </section>
      <div className={styles.gourdShareLink}>
        <NavLink to='/'>친구야 너도 해볼래?</NavLink>
      </div>
    </section>
  )
}
export default Gourd
