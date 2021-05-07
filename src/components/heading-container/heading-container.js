import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import styles from './styles';

import Header from '../header/header';
import ImageTitle from '../image-title/image-title';

const useStyles = makeStyles(styles);

const HeadingContainer = ({backgroundImage, ...props}) => {
    const classes = useStyles({backgroundImage}); 

    return (
        <div className={classes.headSection}>
            <Header />
            <ImageTitle {...props} />
      </div>
    )
}

export default HeadingContainer; 