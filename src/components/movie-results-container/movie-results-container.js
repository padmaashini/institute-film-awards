import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';

import { selectInput } from '../../redux/user/user.selectors';
import { selectNominees } from '../../redux/nominees/nominees.selectors';
import MovieResultItem from '../movie-results-item/movie-results-item';
import SnackBarComponent  from '../snackbar/snackbar';

import styles from './styles';

const useStyles = makeStyles(styles); 

const MovieResultsContainer = ({ page, userInput, nomineesList, emptyContainerContent }) => {
    const classes = useStyles();
    const [movieResults, setMovieResults] = useState([]);

    const maxLimitReached = nomineesList.length >= 5;

    useEffect(() => {
        if(page === 'main') {
            fetch(`https://www.omdbapi.com/?apikey=8418cead&type=movie&s=${userInput}`)
                .then(response => response.json())
                .then(data => setMovieResults(data.Search)); 
        }
        else {
            setMovieResults(nomineesList)
        }
    }, [userInput, nomineesList])

    if(movieResults && movieResults.length > 0) {
        return (
            <div className={classes.container}>
                { movieResults.map((movie, index)=> <MovieResultItem key={index} movieInfo={movie} />) }
                { maxLimitReached && page === 'main' ? <SnackBarComponent /> : null}
            </div>  
        )
    }
    else {
        return (
            <>
                <div className={classes.emptyContainer}>
                    {emptyContainerContent}
                </div>
            </>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    userInput: selectInput,
    nomineesList: selectNominees
});


export default connect(mapStateToProps)(MovieResultsContainer); 