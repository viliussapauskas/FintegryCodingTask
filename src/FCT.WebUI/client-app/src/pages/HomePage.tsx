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
  Theme,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import React, { useEffect, useState } from "react";
import { IRegister } from "../models/init";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

const HomePage = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<IRegister[]>([]);
  useEffect(() => {
    var usersFromLocal = localStorage.getItem("users");

    if (usersFromLocal) {
      var usersJson: IRegister[] = JSON.parse(usersFromLocal);
      setUsers(usersJson);
    }
  }, []);

  return (
    <Grid>
      <Grid item xs={12} md={6}>
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
                secondary={`${x.email} ${x.address}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default HomePage;
