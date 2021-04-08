import React from 'react';
import { Avatar, Card, CardActionArea, Typography } from '@material-ui/core';
import useStyles from './styles';
import Dialog from '../Dialog/Dialog';

const CardCharacters = ({ urlImage, name, species, gender, location }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant="elevation" className={classes.containerCard}>
      <CardActionArea className={classes.action} onClick={handleClickOpen}>
        <Avatar src={urlImage} className={classes.image}></Avatar>
        <Typography align="center">{name}</Typography>
      </CardActionArea>
      <Dialog
        open={open}
        handleClose={handleClose}
        name={name}
        location={location}
        species={species}
        gender={gender}
        urlImage={urlImage}
      />
    </Card>
  );
};

export default CardCharacters;
