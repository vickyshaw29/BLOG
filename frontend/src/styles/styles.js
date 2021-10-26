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
    fontWeight: 'bold !important',
  },
  actionSpacer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  cardContainer:{
    borderRadius:'22px !important'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    minHeight: '22rem',
    backgroundImage: `url(${'https://source.unsplash.com/random'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    '&:hover': {
      backgrouncColor: '#119d96',
      transform: 'scale(1.1)',
    },
  },
  cardInner: {
    minHeight: '100%',
    backgroundColor: 'rgba(17, 157, 150,0.9)',
    color: ' #fff',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    zIndex: 1,
    opacity: 0,
    transition: 'all 0.4s ease 0s',
    '&:hover': {
      opacity: 1,
    },
  },
  saveButton: {
    color: '#fff !important',
    border: `1px solid #ff9800 !important`,
  },
  deleteButton: {
    border: `1px solid #ff9800 !important`,
  },
  //   create
  postContainer: {
    width: '100%',
    border: '1px solid red',
  },
}));
export default useStyles;
