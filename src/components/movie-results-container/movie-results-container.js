import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';

import { selectInput } from '../../redux/user/user.selectors';
import MovieResultItem from '../movie-results-item/movie-results-item';

const useStyles = makeStyles((theme) => ({
   container: {
       ...theme.typography.normal, 
       padding: '10px 60px', 
       color: '#dfca4e'
   }
}))

const MovieResultsContainer = ({ userInput }) => {
    const classes = useStyles();
    const [movieResults, setMovieResults] = useState([]);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=8418cead&type=movie&s=${userInput}`)
                .then(response => response.json())
                .then(data => setMovieResults(data.Search)); 
    }, [userInput])

    return (
        <div className={classes.container}>
            { movieResults && movieResults.map((movie, index)=> <MovieResultItem key={index} movieInfo={movie} />) }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userInput: selectInput
})

export default connect(mapStateToProps)(MovieResultsContainer); 