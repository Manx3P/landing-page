import React from "React";
import styles from "./index.scss";

class firstDetail extends React.Component {
  render() {
    return (
      <div className={styles.bg}>
        <p className={styles.mainText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
        </p>
        <div className={styles.divider} />
        <p className={styles.secondaryText}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit
        </p>
      </div>
    );
  }
}

export default firstDetail;
