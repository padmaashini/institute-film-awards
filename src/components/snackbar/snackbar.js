import React, { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const SnackBarComponent = () => {
    const classes = useStyles(); 
    const [open, setOpen] = useState(true); 

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Snackbar open={open} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="info" className={classes.banner}>
                    You have nominated the maximum amount of 5 movies
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default SnackBarComponent; 