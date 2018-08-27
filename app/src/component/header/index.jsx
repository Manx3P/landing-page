import React from "react"
import styles from "./index.scss"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import phone from '../img/ic-central-phone.svg'
import Input from "@material-ui/core/Input"
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
          <p className={styles.emailLabel}> Open communication </p>
          <Input id="email" placeholder="Your work email" type="text" />
          <Button variant="contained">SEND</Button>
        </Grid>

        <Grid item xs={2} className={styles.phoneGrid}>
          <div className={styles.verticalSeparator}/>
          <img src={phone}/>
          <div className={styles.phoneDiv}>
            <p className={styles.phoneLabel}> +44 33 00 577 447 </p>
            <div className={styles.separator} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default component;
