import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import html2canvas from 'html2canvas'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

import Popup from './Popup'

import data from 'assets/json/ment.json'
import OpenGourd from 'assets/images/openGourd.png'
import { CameraIcon } from 'assets/svgs'
import styles from './gourd.module.scss'

const Gourd = () => {
  const [gourdText, setGourdText] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const URL = process.env.REACT_APP_SHARE_URL ?? ''
  let popupDelay: NodeJS.Timer

  const handleCaptureClick = () => {
    html2canvas(document.getElementById('popGourd') as HTMLElement).then((canvas) => {
      onSaveAs(canvas.toDataURL('image/jpeg'), 'helloGourd.jpeg')
    })
  }

  const onSaveAs = (uri: string, filename: string) => {
    const link = document.createElement('a')
    document.body.appendChild(link)
    link.href = uri
    link.download = filename
    link.click()
    document.body.removeChild(link)
  }

  const shareData = {
    title: '박터트리기!',
    text: '박터트리기 앱!!!',
    url: URL,
  }

  const showPopupFunction = () => {
    setShowPopup(true)
    if (popupDelay) clearTimeout(popupDelay)
    popupDelay = setTimeout(() => {
      setShowPopup(false)
    }, 800)
  }

  const handleShareButtonClick = () => {
    navigator.clipboard.writeText(URL)
    navigator.share(shareData)
    showPopupFunction()
  }

  const handleClipboardButtonClick = () => {
    navigator.clipboard.writeText(URL)
    showPopupFunction()
  }

  useEffect(() => {
    const max = data.comment.length - 1
    const randomNumber = Math.floor(Math.random() * max)
    const randomText = data.comment[randomNumber]
    setGourdText(randomText)
  }, [])

  return (
    <section className={styles.gourdContainer}>
      <section className={styles.gourd}>
        <div id='popGourd'>
          <img src={OpenGourd} alt='OpenGourd' className={styles.openGourdImg} />
          <p>{gourdText}</p>
        </div>
      </section>

      <div className={styles.shareContainer}>
        <div className={styles.shareButtonWrapper}>
          <button
            type='button'
            onClick={handleCaptureClick}
            className={styles.captureButton}
            aria-label='캡처아이콘'
            title='메시지 캡쳐'
          >
            <CameraIcon />
          </button>
          <FacebookShareButton url={URL} title='페이스북 공유'>
            <FacebookIcon size={48} round borderRadius={24} />
          </FacebookShareButton>
          <TwitterShareButton url={URL} title='트위터 공유'>
            <TwitterIcon size={48} round borderRadius={24} />
          </TwitterShareButton>
        </div>

        <div className={styles.clipboardWrapper}>
          <input type='text' value={URL} readOnly className={styles.clipboardInput} />
          <button type='button' onClick={handleClipboardButtonClick} className={styles.clipboardButton}>
            클립보드 복사
          </button>
        </div>

        <div className={styles.popupWrapper}>
          <Popup popupMessage='클립보드에 복사되었습니다.' showPopup={showPopup} />
        </div>
      </div>

      <div className={styles.gourdShareLink}>
        <NavLink to='/' className={styles.shareLink}>
          다시하기
        </NavLink>
        <button type='button' onClick={handleShareButtonClick} className={styles.shareLink}>
          친구야 너도 해볼래?
        </button>
      </div>
    </section>
  )
}
export default Gourd
