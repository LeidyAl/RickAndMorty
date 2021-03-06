import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
  dialogContent: {
    display: 'flex',
  },
  listContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  listAvatar: {
    background: '#00B0C7',
  },
  btn: {
    borderRadius: 100,
    color: '#BA2132',
    borderColor: '#BA2132',
    margin: 12,
  },
}));
