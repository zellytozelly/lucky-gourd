import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import html2canvas from 'html2canvas'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share'
import cx from 'classnames'
import styles from './gourd.module.scss'

import { useGA } from 'hooks'
import data from 'assets/json/ment.json'
import OpenGourd from 'assets/images/openGourd2.png'
import { CameraIcon, ShareIcon } from 'assets/svgs'

import Popup from './Popup'

const Gourd = () => {
  const [gourdText, setGourdText] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [isOpenShareBox, setIsOpenShareBox] = useState(false)
  const URL = process.env.REACT_APP_SHARE_URL ?? ''
  const { gaEvent } = useGA()
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

  const openCopyPopup = () => {
    setShowPopup(true)
    if (popupDelay) clearTimeout(popupDelay)
    popupDelay = setTimeout(() => {
      setShowPopup(false)
    }, 800)
  }

  const handleShareButtonClick = () => {
    navigator.clipboard.writeText(URL)
    gaEvent({ action: 'share-click', data: { event: 'click' } })
    openCopyPopup()
    if (navigator.canShare(shareData)) navigator.share(shareData)
  }

  const handleClipboardButtonClick = () => {
    navigator.clipboard.writeText(URL)
    gaEvent({ action: 'clipboard-click', data: { event: 'click' } })
    openCopyPopup()
  }

  const handleShareBoxToggleClick = () => {
    setIsOpenShareBox((prev) => !prev)
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

      <div className={cx(styles.shareContainer, { [styles.openShareBox]: isOpenShareBox })}>
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
          <button type='button' onClick={handleShareButtonClick} title='링크 공유'>
            <ShareIcon />
          </button>
        </div>

        <button type='button' onClick={handleClipboardButtonClick} className={styles.clipboardWrapper}>
          <input type='text' value={URL} readOnly className={styles.clipboardInput} />
          <button type='button' className={styles.clipboardButton}>
            클립보드 복사
          </button>
        </button>

        <div className={styles.popupWrapper}>
          <Popup popupMessage='클립보드에 복사되었습니다.' showPopup={showPopup} />
        </div>
      </div>

      <div className={styles.gourdShareLink}>
        <NavLink to='/' className={styles.shareLink}>
          다시하기
        </NavLink>
        <button type='button' onClick={handleShareBoxToggleClick} className={styles.shareLink}>
          친구야 너도 해볼래?
        </button>
      </div>
    </section>
  )
}
export default Gourd
