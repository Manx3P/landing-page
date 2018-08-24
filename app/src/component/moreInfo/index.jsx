import React from 'React'
import styles from './index.scss'
import MoreInfoItem from './item/'

class moreInfo extends React.Component {
  render () {
    return <div className={styles.bg}>
      <div className={styles.left}>
        <p className={styles.title}>Lorem ipsum dolor sit</p>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur</p>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className={styles.right}>
        <MoreInfoItem />
        <MoreInfoItem />
        <MoreInfoItem />
      </div>
    </div>
  }
}

export default moreInfo
