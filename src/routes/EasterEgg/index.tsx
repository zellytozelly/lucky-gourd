import { useState } from 'react'
import cx from 'classnames'

import LJH from 'assets/images/him.jpg'
import { HeartIcon } from 'assets/svgs'
import styles from './easterEgg.module.scss'

const EasterEgg = () => {
  const [heartToggle, setHeartToggle] = useState(false)

  const handleHeartClick = () => {
    setHeartToggle((prev) => !prev)
  }
  return (
    <div className={styles.easterEggContainer}>
      <img src={LJH} alt='스승님' className={styles.mainImage} />
      <div className={cx(styles.blame, { [styles.blameActive]: heartToggle })} />
      <button
        type='button'
        onClick={handleHeartClick}
        className={cx(styles.heartButton, { [styles.heartActive]: heartToggle })}
      >
        <HeartIcon />
      </button>
      <p>스승의 은혜는 하늘같아서🎵</p>
    </div>
  )
}
export default EasterEgg
