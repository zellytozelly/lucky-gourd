import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import Gourd from './Gourd'

import { ArrowLeftIcon } from 'assets/svgs'
import BasicGourd from 'assets/images/basicGourd1.png'
import HitGourd from 'assets/images/hitGourd1.png'
import styles from './gourdPlay.module.scss'

const GourdPlay = () => {
  const [isBasicGourdHide, setIsBasicGourdHide] = useState(false)
  const [isGourdOpen, setIsGourdOpen] = useState(false)
  const [hitGourdToggle, setHitGourdToggle] = useState(false)

  const [randomCount, setRandomCount] = useState(0)
  const hitCount = useRef(0)

  const handleBasicGourdClick = () => {
    setIsBasicGourdHide(true)
  }

  const handleHitGourdClick = () => {
    hitCount.current += 1
    setHitGourdToggle((prev) => !prev)
    if (randomCount === hitCount.current) {
      setRandomCount(0)
      setIsGourdOpen(true)
    }
  }

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 15 + 10)
    setRandomCount(randomNumber)
  }, [])

  return (
    <section className={styles.gourdPlayContainer}>
      <header className={styles.gourdPlayHeader}>
        <NavLink to='/' className={styles.homeLink}>
          <ArrowLeftIcon />
          <p>Home</p>
        </NavLink>
        {!isGourdOpen && <h1> 박을 마구마구 터치해보세요 !</h1>}
        {isGourdOpen && <h1> 박이 열렸어요 ! 💌 오늘의 메시지 !</h1>}
      </header>
      <section className={styles.gourdWrapper}>
        {!isGourdOpen && !isBasicGourdHide && (
          <button type='button' onClick={handleBasicGourdClick}>
            <img src={BasicGourd} alt='BasicGourd' className={styles.basicGourdImg} />
          </button>
        )}

        {!isGourdOpen && isBasicGourdHide && (
          <button type='button' onClick={handleHitGourdClick} className={styles.hitGourdButton}>
            <img
              src={HitGourd}
              alt='HitGourd'
              className={cx(styles.hitGourdImg, { [styles.toggleImg]: hitGourdToggle })}
            />
            <p className={styles.hitCountText}>{hitCount.current}</p>
          </button>
        )}

        {isGourdOpen && <Gourd />}
      </section>
    </section>
  )
}
export default GourdPlay
