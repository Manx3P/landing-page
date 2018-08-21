import React from "react";
import styles from "./index.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class component extends React.Component {
  render() {
    return (
      <Grid container className={styles.app}>
        <Grid item xs={6} sm={6} className={styles.logoGrid}>
          <img
            className={styles.logo}
            src="https://avatars1.githubusercontent.com/u/42061231?s=260"
          />
        </Grid>
        <Grid item xs={3} sm={3} className={styles.emailGrid}>
          <p className={styles.emailLabel}> Do you want we talk with you? </p>
          <TextField id="email" placeholder="Your work email" type="text" />
          <Button variant="contained">SEND</Button>
        </Grid>

        <Grid item xs={3} sm={3} className={styles.phoneGrid}>
          <p className={styles.phoneLabel}> (865) 879-0234 </p>
          <div className={styles.separator} />
        </Grid>
      </Grid>
    );
  }
}

export default component;
