import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { addNomineeToState, removeNomineeFromState } from '../../redux/nominees/nominees.actions';
import { addNominee, removeNominee } from '../../redux/nominees/nominees.utils';
import { selectNominees } from '../../redux/nominees/nominees.selectors';
import { createStructuredSelector } from 'reselect';


const useStyles = makeStyles((theme) => ({
   container: {
    //    ...theme.typography.normal, 
    //    padding: '60px !important', 
       color: '#dfca4e',
       width: '80%',
       marginRight: 'auto',
       marginLeft: 'auto',
      textAlign: 'center',
       "@media (max-width: 780px)": {
         width: '100% !important'
       },
    //    border: 'solid',
       borderRadius: '20px',
       marginTop: '10px',
       padding: '20px 0px',
    //    background: '#211f18'
    //    background: '#0D0C11'
    // background: '#151513'
    background: 'linear-gradient(94.97deg, #151513 -0.94%, #0D0C11 101.96%)'
   },
   poster: {
        height: '200px',
        maxWidth: '150px',
   },
   plot: {
       fontSize: '14px !important',
       color: '#dae0db'
   },
   genre: {
    fontSize: '14px !important',
    color: '#2B6ABC'
    },
   text: {
       textAlign: 'left !important',
    //    color: '#C48813',
       color: '#D7AC39',
       fontSize: '22px'
   },
   disabledButton: {
       backgroundColor: '#666c91 !important',
       color: 'black !important'
   },
   maxLimitReached: {
       fontSize: '12px',
       maxWidth: '150px',
       overflowWrap: 'break-word',
       textAlign: 'center',
       marginLeft:'auto',
       marginRight: 'auto'
   }
}))

const MovieResultItem = ({ movieInfo, addNominee, removeNominee, nomineesList }) => {
    const { Poster, Title, Type, Year } = movieInfo; 
    const classes = useStyles(); 
    const [details, setDetails] = useState(null);

    console.log(nomineesList)

    const movieAdded = Boolean(nomineesList.find(nominee => nominee.imdbID === movieInfo.imdbID))
    console.log(movieAdded)
    const maxLimitReached = nomineesList.length >= 5
    // console.log
    // const movieAdded = false

    useEffect(() => {
        // http://www.omdbapi.com/?apikey=8418cead&i=tt0418279
        if(movieInfo && movieInfo.imdbID) {
            fetch(`http://www.omdbapi.com/?apikey=8418cead&i=${movieInfo.imdbID}`)
                .then(response => response.json())
                .then(data => setDetails(data)); 
        }
    }, [movieInfo])

    const onNominate = () => {
        addNominee(movieInfo)
    }

    const removeNomination = () => {
        removeNominee(movieInfo)
    }

    // const colours = ['#D40011', '#00007C', '#27A102' ] 
    const colours = ['#00007C', '#930001', '#258707']
    // change above to object based on rating source

    return (
        <div>
            {console.log(nomineesList)}
            <Grid container className={classes.container}>
                <Grid item xs={2}>
                    <img className={classes.poster} src={Poster} />
                </Grid>
                <Grid item xs={7} className={classes.text}>
                    {Title}
                    <br/>
                    {details && details.Genre ? <p className={classes.genre}>{details.Genre}</p> : ""}
                    {/* <br/> */}
                    {details && details.Plot && <p className={classes.plot}>{details? details.Plot : ''}</p>}
                    {
                        details && details.Ratings?
                        <div style={{display: 'flex', gap: '20px'}}>
                            {details.Ratings.map((rating, index) => {
                                const color = colours[index]; 
                                return(
                                    <div style={{display: 'block', marginRight: '15px !important', color: 'white'}}>
                                        <div key={index} 
                                            style={{height: '50px', width: '50px', lineHeight: '50px', borderRadius: '50%', color: 'white !important',
                                                fontWeight: '500 !important',
                                                backgroundColor: color, fontSize: '14px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
                                            {rating.Value}
                                        </div>
                                        <p style={{fontSize: '14px', maxWidth: '113px', overflowWrap: 'break-word', textAlign: 'center', color: '#F3AA4E'}}>{rating.Source}</p>
                                    </div>
                                )
                            }
                            )}
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
                    {
                        maxLimitReached && !movieAdded ? <p className={classes.maxLimitReached}>Max Number of Nominees Reached</p> : null
                    }
                    <br/>
                    {
                        movieAdded && (
                            <Button variant="contained" color="secondary" onClick={removeNomination} style={{marginTop: '20px', width: '106px', backgroundColor: '#c2104f'}}>
                                Remove
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = ({ nominees }) => createStructuredSelector({
    nomineesList: selectNominees
});

const mapDispatchToProps = dispatch => ({
    addNominee: nominee => dispatch(addNomineeToState(nominee)),
    removeNominee: nominee => dispatch(removeNomineeFromState(nominee))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieResultItem); 