import React from "React"
import styles from "./index.scss"
import logoVertical from '../img/logo-vertical.svg'

class footer extends React.Component {
  render () {
    return (
      <div className={styles.bg}>
        <img className={styles.logo} src={logoVertical}/>
      </div>
    );
  }
}

export default footer;
