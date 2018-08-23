import React from "React";
import styles from "./index.scss";
import imgBox1 from "../../img/img-box-1.png";

class summaryItem extends React.Component {
  render() {
    return (
      <div className={styles.bg}>
        <img src={imgBox1} />
        <p className={styles.title}>Order Fulfillment</p>
        <p className={styles.description}>
          E-commerce is at our heart. We do it, we know it. We know the pain.
        </p>
      </div>
    );
  }
}

export default summaryItem;
