import React from "React";
import styles from "./index.scss";

class firstDetail extends React.Component {
  render() {
    return (
      <div className={styles.bg}>
        <p className={styles.mainText}>
          We win - You win
        </p>
        <div className={styles.divider} />
        <p className={styles.secondaryText}>
          Your partner in fulfilment
        </p>
      </div>
    );
  }
}

export default firstDetail;
