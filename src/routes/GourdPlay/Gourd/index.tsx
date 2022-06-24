import { NavLink } from 'react-router-dom'

import data from 'assets/json/ment.json'
import OpenGourd from 'assets/images/openGourd.png'
import styles from './gourd.module.scss'
import { useEffect, useState } from 'react'

const Gourd = () => {
  const [gourdText, setGourdText] = useState('')
  useEffect(() => {
    const max = data.comment.length - 1
    const randomNumber = Math.floor(Math.random() * max)
    const randomText = data.comment[randomNumber]
    setGourdText(randomText)
  }, [])

  return (
    <section className={styles.gourdContainer}>
      <section className={styles.gourd}>
        <img src={OpenGourd} alt='OpenGourd' className={styles.openGourdImg} />
        <p>{gourdText}</p>
      </section>
      <div className={styles.gourdShareLink}>
        <NavLink to='/'>친구야 너도 해볼래?</NavLink>
      </div>
    </section>
  )
}
export default Gourd
