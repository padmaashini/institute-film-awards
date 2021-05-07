import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head'

import Header from '../src/components/header/header';
import SearchBarContainer from '../src/components/search-bar-container/search-bar-container'


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'black'
  },
  headSection: {
    background: 'url(ocean-background.jpg)',
    // background: 'url(ocean-background.jpg)',
    backgroundSize: '100%'
  }
}))

const Nominations = () => {
    const classes = useStyles(); 
    return (
        <div className={classes.container}>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans&display=swap" rel="stylesheet" />
            </Head>
            <div className={classes.headSection}>
                <Header/>
                <SearchBarContainer/>
            </div>
        </div>
    )
}

export default Nominations; 