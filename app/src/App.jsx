import React from "react"
import styles from "./index.scss"
import { muiTheme } from "./theme"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import { components, services } from "./loader"
import { MuiThemeProvider } from "@material-ui/core/styles"

class component extends React.PureComponent {
  render() {
    const { user } = this.props
    return (
      <MuiThemeProvider theme={muiTheme}>
          <Grid container>
            <Grid item className={styles.main} xs={12} sm={12} md={8} lg={12}>
              <components.header />
              <components.mainDisplay />
              <components.firstDetail />
              <components.summary />
              <components.moreInfo />
              <components.caseStudies />
              <components.secondDetail />
              <components.contact />
              <components.footer />
            </Grid>
          </Grid>
      </MuiThemeProvider>
    );
  }
}

export default component
