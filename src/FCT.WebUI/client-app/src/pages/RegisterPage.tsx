import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Form, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import useRouter from "use-react-router";
import { IRegister } from "../models/init";
import {
  addRegisteredUser,
  getUserByIndex,
  isIndexValid,
  updateRegisteredUser,
} from "../utils/localStorageManager";

interface IProps {
  id: string;
}

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

const RegisterPage: FC<RouteComponentProps<IProps>> = (props) => {
  const classes = useStyles();
  const { history } = useRouter();

  const [isEdit, setIsEdit] = useState<boolean | null>(null);

  useEffect(() => {
    if (props.match.params.id) {
      isIndexValid(props.match.params.id)
        ? setIsEdit(true)
        : props.history.push("/");
    } else {
      setIsEdit(false);
    }
  }, []);

  const handleSubmit = async (values: IRegister) => {
    isEdit
      ? updateRegisteredUser(values, parseInt(props.match.params.id))
      : addRegisteredUser(values);
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {isEdit === null && <div>Loading...</div>}
      {isEdit !== null && (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              {isEdit ? "Edit register" : "Register"}
            </Typography>
            <Formik
              initialValues={
                isEdit
                  ? getUserByIndex(parseInt(props.match.params.id))
                  : {
                      name: "",
                      surname: "",
                      email: "",
                      address: {
                        country: "",
                        city: "",
                        code: "",
                        house: "",
                      },
                    }
              }
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
                      value={props.values.email}
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
                      value={props.values.name}
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
                      value={props.values.surname}
                    />
                    <TextField
                      variant="outlined"
                      margin="dense"
                      required
                      name="address[country]"
                      label="Country"
                      type="text"
                      id="country"
                      onChange={props.handleChange}
                      value={props.values.address.country}
                    />
                    <TextField
                      variant="outlined"
                      margin="dense"
                      required
                      name="address[city]"
                      label="City"
                      type="text"
                      id="city"
                      onChange={props.handleChange}
                      value={props.values.address.city}
                    />
                    <TextField
                      variant="outlined"
                      margin="dense"
                      required
                      name="address[code]"
                      label="Code"
                      type="text"
                      id="code"
                      onChange={props.handleChange}
                      value={props.values.address.code}
                    />
                    <TextField
                      variant="outlined"
                      margin="dense"
                      required
                      name="address[house]"
                      label="House"
                      type="text"
                      id="house"
                      onChange={props.handleChange}
                      value={props.values.address.house}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      {isEdit ? "Update" : "Register"}
                    </Button>
                  </div>
                </Form>
              )}
            />
          </div>
        </Slide>
      )}
    </Container>
  );
};

export default RegisterPage;
