import React from "react"
import styles from "./index.scss"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import logoHorizontal from '../img/logo-horizontal.svg'

class component extends React.Component {
  render() {
    return (
      <Grid container className={styles.app}>
        <Grid item xs={5} className={styles.logoGrid}>
          <img
            className={styles.logo}
            src={logoHorizontal}
          />
        </Grid>
        <Grid item xs={5} className={styles.emailGrid}>
          <p className={styles.emailLabel}> Let's talk? </p>
          <TextField id="email" placeholder="Your work email" type="text" />
          <Button variant="contained">SEND</Button>
        </Grid>

        <Grid item xs={2} className={styles.phoneGrid}>
          <p className={styles.phoneLabel}> (865) 879-0234 </p>
          <div className={styles.separator} />
        </Grid>
      </Grid>
    );
  }
}

export default component;
