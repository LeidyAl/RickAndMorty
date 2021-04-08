import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core/';
import { Fingerprint, LocationOn, Wc } from '@material-ui/icons';
import useStyles from './styles';

export default function AlertDialog({
  name,
  id,
  urlImage,
  species,
  gender,
  location,
  open,
  handleClose,
}) {
  const classes = useStyles();
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent className={classes.dialogContent}>
          <div>
            <img src={urlImage} alt="character of Rick and Morty" />
          </div>
          <List>
            <ListItem>
              <Typography variant="h4">
                {id} {name}
              </Typography>
            </ListItem>
            <div className={classes.listContainer}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.listAvatar}>
                    <Fingerprint />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Species" secondary={species} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.listAvatar}>
                    <Wc />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Gender" secondary={gender} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.listAvatar}>
                    <LocationOn />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Location" secondary={location} />
              </ListItem>
            </div>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  // });
  // }
}
