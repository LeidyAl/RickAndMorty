import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
  container: {
    background: '#f2f2f2',
  },
  cardsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
  },
  title: {
    padding: 36,
    color: '#00B0C7',
    fontWeight: 'bolder',
  },
  loadingContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: '100px !important',
    height: '100px !important',
  },
}));
