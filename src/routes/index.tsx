import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useGA } from 'hooks'
import Main from './Main'
import GourdPlay from './GourdPlay'

import styles from './routes.module.scss'

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
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
