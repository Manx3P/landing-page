import React from "React";
import styles from "./index.scss";

class secondDetail extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.bg}>
          <p className={styles.title}>
            Sed ut perspiciatis unde omnis iste natus error sit
          </p>
          <p className={styles.description}>
            Sed ut perspiciatis unde omnis iste natus error sit
          </p>
        </div>
      </div>  
    )
  }
}

export default secondDetail;
