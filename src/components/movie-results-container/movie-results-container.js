import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';

import { selectInput } from '../../redux/user/user.selectors';
import { selectNominees } from '../../redux/nominees/nominees.selectors';
import MovieResultItem from '../movie-results-item/movie-results-item';
import SnackBarComponent  from '../snackbar/snackbar';

const useStyles = makeStyles((theme) => ({
   container: {
       ...theme.typography.normal, 
       padding: '10px 60px', 
       color: '#dfca4e'
   }
}))

const MovieResultsContainer = ({ page, userInput, nomineesList }) => {
    const classes = useStyles();
    const [movieResults, setMovieResults] = useState([]);

    const maxLimitReached = nomineesList.length >= 5;

    useEffect(() => {
        if(page === 'main') {
            fetch(`http://www.omdbapi.com/?apikey=8418cead&type=movie&s=${userInput}`)
                .then(response => response.json())
                .then(data => setMovieResults(data.Search)); 
        }
        else {
            setMovieResults(nomineesList)
        }
    }, [userInput, nomineesList])

    return (
        <div className={classes.container}>
            { movieResults && movieResults.map((movie, index)=> <MovieResultItem key={index} movieInfo={movie} />) }
            {movieResults && maxLimitReached && page === 'main' && <SnackBarComponent />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userInput: selectInput,
    nomineesList: selectNominees
});


export default connect(mapStateToProps)(MovieResultsContainer); 