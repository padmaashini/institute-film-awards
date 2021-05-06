import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   container: {
       ...theme.typography.normal, 
       padding: '60px', 
       color: '#dfca4e'
   }
}))

const MovieResultsContainer = () => {
    const classes = useStyles();

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=8418cead&s=${'after'}`)
    }, [])

    return (
        <div className={classes.container}>
            hello friends
        </div>
    )
}

export default MovieResultsContainer; 