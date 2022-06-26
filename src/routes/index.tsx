import { Routes, Route } from 'react-router-dom'

import Main from './Main'
import GourdPlay from './GourdPlay'

import styles from './routes.module.scss'

const App = () => {
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
