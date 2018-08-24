import React from 'React'
import styles from './index.scss'

class CaseStudiesItem extends React.Component {
  render () {
    return (
      <div className={styles.bg}>
        <div className={styles.divImg}>

        </div>
        <div className={styles.divDescription}>
          <p className={styles.companyName}>Company Name</p>
          <p className={styles.title}>“Manx3P has been pretty incredible to work with!”</p>
          <p className={styles.description}>Some preview text in this space that works to introduce what we want to say about the Company study case…</p>
          <p className={styles.readStory}>READ THE STORY</p>
        </div>
      </div>
    )
  }
}

export default CaseStudiesItem
