import React from 'React'
import styles from './index.scss'
import CaseStudiesItem from './item'

class caseStudies extends React.Component {
  render () {
    return (
        <div className={styles.bg}>
        <h1>Case Studies</h1>
        <CaseStudiesItem />
        <div className={styles.before}>
          <div className={styles.text}>
            <p>Prev case</p>
            <p>Prev Company Name</p>
          </div>
          <div className={styles.button}>
          </div>
        </div>
        <div className={styles.after}>
          <div className={styles.text}>
            <p>Next case</p>
            <p>Next Company Name</p>
          </div>
          <div className={styles.button}>
          </div>
        </div>
      </div>
    )
  }
}

export default caseStudies
