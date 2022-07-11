import { cx } from 'styles'
import styles from './popup.module.scss'

interface Props {
  popupMessage?: string
  showPopup: boolean
}

const Popup = ({ popupMessage, showPopup }: Props) => {
  return <div className={cx(styles.container, { [styles.fadeIn]: showPopup })}>{popupMessage}</div>
}

export default Popup
