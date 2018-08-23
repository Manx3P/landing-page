import React from 'React'
import styles from './index.scss'
import bgHeader from '../img/bg-header.png'

class mainDisplay extends React.Component {
  render () {
    return <div className={styles.display}>
      <div>
        <p className={styles.mainText}> Type some nice text right here </p>
        <p className={styles.secondaryText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
      </div>
      <img className={styles.img} src={bgHeader}/>
    </div>
  }
}

export default mainDisplay
