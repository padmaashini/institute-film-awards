import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';

import { selectInput } from '../../redux/user/user.selectors';
import MovieResultItem from '../movie-results-item/movie-results-item';

const useStyles = makeStyles((theme) => ({
   container: {
       ...theme.typography.normal, 
       padding: '60px', 
       color: '#dfca4e'
   }
}))

const MovieResultsContainer = ({ userInput }) => {
    const classes = useStyles();

    const [movieResults, setMovieResults] = useState([]);

    useEffect(() => {
        // if(userInput || !userInput) {
        //   
        //     fetch(`http://www.omdbapi.com/?apikey=8418cead&type=movie&s=${userInput}`)
        //         .then(response => response.json())
        //         .then(data => setMovieResults(data.Search)); 
        // }
        fetch(`http://www.omdbapi.com/?apikey=8418cead&type=movie&s=${userInput}`)
                .then(response => response.json())
                .then(data => setMovieResults(data.Search)); 
    }, [userInput])

    return (
        <div className={classes.container}>
            {console.log(movieResults)}
            {
                movieResults ? movieResults.map((movie, index)=> <MovieResultItem key={index} movieInfo={movie} />) : null
            }
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="auto" viewBox="0 0 935 266">
                <defs>
                    <linearGradient id="linear-gradient" y1="-0.158" x2="1.015" y2="1.051" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#151513"/>
                    <stop offset="1" stop-color="#0d0c11"/>
                    </linearGradient>
                </defs>
                <rect id="Rectangle_3" data-name="Rectangle 3" width="935" height="266" fill="url(#linear-gradient)"/>
            </svg> */}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userInput: selectInput
})

export default connect(mapStateToProps)(MovieResultsContainer); 