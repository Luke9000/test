import clsx from 'clsx';
import styles from './styles.module.css'

interface Props {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    text: string;
}

const Window: React.FC<Props> = ({open, onClose, children, text}) => {
  return (
<div
      className={clsx(
        styles.overlay,
        open ? styles.visible : styles.invisible
      )}
      onClick={onClose}
    >
      <div
        className={clsx(styles.window, open ? styles.scaleIn : styles.scaleOut)}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button className={styles.closeButton} onClick={onClose}>
          X
        </button> */}
        <p>{text}</p>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Window