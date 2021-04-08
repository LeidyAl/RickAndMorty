import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
  containerCard: {
    minWidth: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 12,
    padding: 8,
  },
  titleCard: {
    marginTop: 36,
    color: theme.palette.primary.dark,
  },
  image: {
    width: 120,
    height: 120,
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
