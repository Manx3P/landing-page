import React from 'React'
import styles from './index.scss'
import BoxOpened from '../../img/ic-box-opened.svg'

class MoreInfoItem extends React.Component {
  render () {
    return (
      <div className={styles.bg}>
        <div className={styles.icon}>
          <div className={styles.bgCircle}/>
            <img
              src={BoxOpened}
            />
        </div>
        <div className={styles.text}>
          <p className={styles.title}>Your stuff</p>
          <p className={styles.description}>Send us your stuff</p>
        </div>
      </div>
    )
  }
}

export default MoreInfoItem
