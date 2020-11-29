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
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { IRegister } from "../models/init";
import { getListOfRegisteredUsers } from "../utils/localStorageManager";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: theme.spacing(4, 0, 2),
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
      </Grid>
    </Grid>
  );
};

export default HomePage;
