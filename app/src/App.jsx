import React from "react";
import { connect } from "react-redux";
import { components, services } from "./loader";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { muiTheme } from "./theme";
import styles from "./index.scss";

class component extends React.PureComponent {
  render() {
    const { user } = this.props;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <Grid>
            <Grid item className={styles.main} xs={12} sm={12} md={8} lg={12}>
              <components.header />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(component);
