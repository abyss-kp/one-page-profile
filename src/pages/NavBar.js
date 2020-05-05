import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBarCollapse from "../components/AppBarCollapse";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {

    backgroundColor: '#364240'
  },
  toggleDrawer: {},
  appTitle: {}
};

function NavBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.navigation}>
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={classes.appTitle}
        >
          <h3>{props.data[0] ? props.data[0].fields.name : ""}</h3>
        </Typography>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(NavBar);
