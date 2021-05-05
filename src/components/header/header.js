import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles'
import MovieIcon from '@material-ui/icons/Movie';
// const conatinerFluid = {
//   paddingRight: "15px",
//   paddingLeft: "15px",
//   marginRight: 'auto',
//   marginLeft: 'auto',
//   maxWidth: "1140px",        
// };

const container2 = {
  // ...conatinerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 958px)": {
    maxWidth: "940px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const useStyles = makeStyles((theme) => ({
  container2: {
    // ...conatinerFluid,
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    "@media (max-width: 780px)": {
      width: '100% !important'
    },
  //   "@media (min-width: 576px)": {
  //     maxWidth: "540px",
  //     minWidth: "540px"
  //   },
  //   "@media (min-width: 768px)": {
  //     maxWidth: "720px",
  //     minWidth: "720px"
  //   },
  //   "@media (min-width: 958px)": {
  //     maxWidth: "940px",
  //     minWidth: "940px"
  //   },
  //   "@media (min-width: 992px)": {
  //     maxWidth: "960px",
  //     minWidth: "960px"
  //   },
  //   "@media (min-width: 1200px)": {
  //     background: 'white !important',
  //     // width: '1140px'
  //     // maxWidth: "1140px",
  //     minWidth: "1140px"
  // }
  },
  root: {
    flexGrow: 1,
    // ...container2,
    background: '#110e0e',
    // width: '100%',
    // width: '80%',
    ...theme.typography.normal
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    ...theme.typography.normal
  },
  text:{
    ...theme.typography.normal
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{background: '#110e0e', color: '#dfca4e', width: '100%'}} position="static">
        <Toolbar className={classes.container2}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MovieIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SHOPPIES: MOVIE AWARDS
          </Typography>
          <Button color="inherit" className={classes.text}>About</Button>
          <Button color="inherit" className={classes.text}>Nominations</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}