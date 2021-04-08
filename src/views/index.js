import React from 'react';
import { CHARACTERS } from './../api/index';
import { useQuery } from '@apollo/client';
import CardCharacters from '../components/Card/CardCharacters';
import { Typography, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

function Inicio() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(CHARACTERS);
  if (loading)
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress disableShrink className={classes.loading} />
      </div>
    );
  if (error) return <p>Error :</p>;
  if (data) {
    return (
      <div className={classes.container}>
        <Typography variant="h2" align="center" className={classes.title}>
          Rick and Morty
        </Typography>
        <div className={classes.cardsContainer}>
          {data.characters.results.map((characters) => {
            return (
              <div>
                <CardCharacters
                  urlImage={characters.image}
                  name={characters.name}
                  location={characters.location.name}
                  species={characters.species}
                  gender={characters.gender}
                  id={characters.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Inicio;
