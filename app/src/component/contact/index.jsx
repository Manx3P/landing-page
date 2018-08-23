import React from "React"
import styles from "./index.scss"
import icEnvelope from '../img/ic-envelop.svg'
import icPhone from '../img/ic-phone.svg'

class contact extends React.Component {
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.divLabel}>
          <p className={styles.title}>Let's talk?</p>
          <p className={styles.description}>
            Please supply your email and we will get in touch
          </p>
        </div>
        <div className={styles.divContact}>
          <div>
            <input/>
          </div>
          <div className={styles.divContactBottom}>
            <img src={icPhone}/>
            <p className={styles.label}>(865) 879-0234</p>
            <div />
            <img src={icEnvelope}/>
            <p className={styles.label}>contact@manx3p.email</p>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
