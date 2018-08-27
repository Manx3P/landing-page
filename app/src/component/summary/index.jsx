import React from 'React'
import styles from './index.scss'
import SummaryItem from './item/index'

class summary extends React.Component {
  render () {
    return <div className={styles.bg}>
      <p className={styles.title}>Service for business success
        <br/> How the fulfimenet system works for you</p>
      <div className={styles.items}>
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
      </div>
    </div>
  }
}

export default summary
