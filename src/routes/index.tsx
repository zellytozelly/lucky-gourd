import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { useGA } from 'hooks'
import Main from './Main'
import GourdPlay from './GourdPlay'

import styles from './routes.module.scss'
import EasterEgg from './EasterEgg'

const App = () => {
  const { initializeGA } = useGA()
  useEffect(() => {
    initializeGA()
  })

  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='play' element={<GourdPlay />} />
          <Route path='easterEgg' element={<EasterEgg />} />
          <Route
            path='*'
            element={
              <div className={styles.notFoundText}>
                <p>404 Not Found</p>
                <Link to='/'>🏠홈으로 돌아가기🏃‍♂️</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
