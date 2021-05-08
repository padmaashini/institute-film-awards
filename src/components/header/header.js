import React from 'react';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MovieIcon from '@material-ui/icons/Movie';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.container} position="static">
        <Toolbar className={classes.header}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => Router.push('/')}>
            <MovieIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={() => Router.push('/')}>
            SHOPPIES: MOVIE AWARDS
          </Typography>
          <Button color="inherit" className={classes.text} onClick={()=>Router.push('/nominations')}>Nominations</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}