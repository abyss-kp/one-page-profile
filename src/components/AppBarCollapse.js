import React, { useState } from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { useHistory } from "react-router-dom";
const styles = theme => ({
  root: {
    marginLeft: 'auto',
    '& a': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});
const AppBarCollapse = props => {
  const history = useHistory()
  const [menu, toggleMenu] = useState(false)
  let pathname = history.location.pathname
  pathname = pathname === "/" ? "/Summary" : pathname
  const menuItems = ['Summary', 'Projects', 'Photos'].filter(itm => `/${itm}`.toLowerCase() !== pathname.toLowerCase())
  let menuClicked = (e) => {
    toggleMenu(true)
    history.push(e.target.innerText)
  }
  return (
    <div className={props.classes.root}>
      <ButtonAppBarCollapse menu={menu} toggleMenu={toggleMenu}>
        {menuItems.map(itm => <MenuItem key={itm} onClick={menuClicked}>{itm}</MenuItem>)}
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        {menuItems.map(itm => <Button color="inherit" key={itm} onClick={menuClicked}>{itm}</Button>)}
      </div>
    </div>
  )
};

export default withStyles(styles)(AppBarCollapse);
