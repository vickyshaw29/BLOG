import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1em',
  },
  rootCard: {
    borderRadius: 50,
  },
  media: {
    height: 140,
  },
  title: {
    paddingBottom: '0.5em',
  },
  titleTxt: {
    fontWeight:'bold !important'
  },
  actionSpacer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  card: {
    borderRadius: 50,
    '&:hover': {
      //   opacity: 0.5,
    },
  },
  //   create
  postContainer: {
    width: '100%',
    border: '1px solid red',
  },
}));
export default useStyles;
