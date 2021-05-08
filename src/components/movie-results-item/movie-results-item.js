import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './styles';

import { addNomineeToState, removeNomineeFromState } from '../../redux/nominees/nominees.actions';
import { addNominee, removeNominee } from '../../redux/nominees/nominees.utils';
import { selectNominees } from '../../redux/nominees/nominees.selectors';

const useStyles = makeStyles(styles);

const MovieResultItem = ({ movieInfo, addNominee, removeNominee, nomineesList }) => {
    const { Poster, Title, Year } = movieInfo; 
    const classes = useStyles(); 
    const [details, setDetails] = useState(null);

    const movieAdded = Boolean(nomineesList.find(nominee => nominee.imdbID === movieInfo.imdbID));
    const maxLimitReached = nomineesList.length >= 5;

    const colours = {
        "Internet Movie Database" : { color: '#00007C'},
        "Rotten Tomatoes": { color: '#930001'},
        "Metacritic": { color: '#258707' }
    }

    useEffect(() => {
        if(movieInfo && movieInfo.imdbID && movieInfo.imdb !== 'N/A') {
            fetch(`https://www.omdbapi.com/?apikey=8418cead&i=${movieInfo.imdbID}`)
                .then(response => response.json())
                .then(data => setDetails(data))
                .catch(err => console.error(err)); 
        }
    }, [movieInfo])

    const onNominate = () => {
        addNominee(movieInfo)
    }

    const removeNomination = () => {
        removeNominee(movieInfo)
    }

    return (
        <div>
            <Grid container className={classes.container}>
                <Grid item xs={2}>
                    <img className={classes.poster} src={Poster} />
                </Grid>
                <Grid item xs={7} className={classes.text}>
                    {Title}
                    <br/>
                    {details && details.Genre ? <p className={classes.genre}>{details.Genre}</p> : ""}
                    {details && details.Plot && <p className={classes.plot}>{details? details.Plot : ''}</p>}
                    {
                        details && details.Ratings?
                        <div className={classes.ratingsContainer}>
                            {details.Ratings.map((rating, index) => {
                                const color = colours[rating.Source].color; 
                                return(
                                    <div key={index} className={classes.individualRating}>
                                        <div key={index} className={classes.ratingIcon} style={{backgroundColor: color}}>
                                            {rating.Value}
                                        </div>
                                        <p className={classes.ratingSource}>{rating.Source}</p>
                                    </div>
                                )
                            })}
                        </div>
                        : null
                    }
                </Grid>
                <Grid item xs={1}>
                    {Year}
                </Grid>
                <Grid item xs={2} style={{textAlign: 'center'}}>
                    <Button variant="contained" color="primary" onClick={onNominate} disabled={movieAdded || maxLimitReached} classes={{disabled: classes.disabledButton}}>
                       Nominate
                    </Button>
                    { maxLimitReached && !movieAdded ? <p className={classes.maxLimitReached}>Max Number of Nominees Reached</p> : null }
                    <br/>
                    {
                        movieAdded && (
                            <Button variant="contained" color="secondary" onClick={removeNomination} className={classes.removeButton}>
                                Remove
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    nomineesList: selectNominees
});

const mapDispatchToProps = dispatch => ({
    addNominee: nominee => dispatch(addNomineeToState(nominee)),
    removeNominee: nominee => dispatch(removeNomineeFromState(nominee))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieResultItem); 