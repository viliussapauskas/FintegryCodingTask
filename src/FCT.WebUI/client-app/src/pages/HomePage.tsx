import {
  Avatar,
  createStyles,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Slide,
  Theme,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { IRegister } from "../models/init";
import { getListOfRegisteredUsers } from "../utils/localStorageManager";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2em",
    },
  })
);

const HomePage: FC<RouteComponentProps> = (props) => {
  const classes = useStyles();

  const [users, setUsers] = useState<IRegister[]>([]);
  useEffect(() => {
    setUsers(getListOfRegisteredUsers());
  }, []);

  return (
    <Grid>
      <Grid item xs={12} md={12}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h6" className={classes.title}>
              Registered users
            </Typography>
            <List>
              {users.map((x, i) => (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${x.name} ${x.surname}`}
                    secondary={`Email: ${x.email} Address: ${x.address.country} ${x.address.city} ${x.address.code} ${x.address.house}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => props.history.push(`/register/${i}`)}
                    >
                      <EditIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default HomePage;
