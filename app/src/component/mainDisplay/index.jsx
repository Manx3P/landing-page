import React from 'React'
import styles from './index.scss'

class mainDisplay extends React.Component {
  render () {
    return <div className={styles.display}>
      <div>
        <p className={styles.mainText}> Reliable $ cost effective fulfilment.
          <br/> Passionate about fulfilment
          <br/> Do it right - Do it Manx3P
          </p>
        <p className={styles.secondaryText}> Your success is our success
          <br/> Committed to lower costs with high success
        </p>
      </div>
    </div>
  }
}

export default mainDisplay
