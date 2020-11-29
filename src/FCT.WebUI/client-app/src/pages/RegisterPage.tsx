import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Form, Formik } from "formik";
import React from "react";
import useRouter from "use-react-router";
import { IRegister } from "../models/init";

const initialState: IRegister = {
  name: "",
  surname: "",
  email: "",
  address: "",
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const { history } = useRouter();

  const handleSubmit = async (values: IRegister) => {
    console.log(values);
    var users = localStorage.getItem("users");

    if (users) {
      var usersJson: IRegister[] = JSON.parse(users);
      usersJson.push(values);
      localStorage.setItem("users", JSON.stringify(usersJson));
      history.push("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Formik
          initialValues={initialState}
          onSubmit={handleSubmit}
          render={(props) => (
            <Form>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={props.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
                  onChange={props.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="surname"
                  label="Surname"
                  type="text"
                  id="surname"
                  onChange={props.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="text"
                  id="address"
                  onChange={props.handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Register
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </Container>
  );
};

export default RegisterPage;
