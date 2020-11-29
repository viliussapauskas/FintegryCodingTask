import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import useRouter from "use-react-router";

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginLeft: "auto",
  },
}));
const Navbar = () => {
  const classes = useStyles();

  const { history } = useRouter();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Fintegry coding task</Typography>
          <div className={classes.buttons}>
            <Button onClick={() => history.push("/register")} color="inherit">
              Register
            </Button>
            <Button onClick={() => history.push("/")} color="inherit">
              Users list
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
