import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head'

import HeadingContainer from '../src/components/heading-container/heading-container'


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'black'
  }
}))

const Nominations = () => {
    const classes = useStyles(); 
    return (
        <div className={classes.container}>
            <Head>
              <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans&display=swap" rel="stylesheet" />
            </Head>
            <HeadingContainer 
              backgroundImage='ocean-background.jpg'
              title='Nominations'
            />
        </div>
    )
}

export default Nominations; 