import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
   }
}))

const MovieResultItem = ({ movieInfo }) => {
    const { Poster, Title, Type, Year } = movieInfo; 
    const classes = useStyles(); 
    const [details, setDetails] = useState(null);

    useEffect(() => {
        // http://www.omdbapi.com/?apikey=8418cead&i=tt0418279
        if(movieInfo && movieInfo.imdbID) {
            fetch(`http://www.omdbapi.com/?apikey=8418cead&i=${movieInfo.imdbID}`)
                .then(response => response.json())
                .then(data => setDetails(data)); 
        }
    }, [movieInfo])

    const onNominate = () => {

    }

    // const colours = ['#D40011', '#00007C', '#27A102' ] 
    const colours = ['#00007C', '#930001', '#258707']
    // change above to object based on rating source

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
                <Grid item xs={2}>
                    <Button variant="contained" color="primary" onClick={onNominate}>
                       Nominate
                    </Button>
                    {/* <Button variant="contained" color="secondary">
                       Remove
                    </Button> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default MovieResultItem; 