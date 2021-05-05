import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const conatinerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: "1140px",        
  };
  
  const container2 = {
    ...conatinerFluid,
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 958px)": {
      maxWidth: "940px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  };

const useStyles = makeStyles((theme) => ({
    ...container2,
    container: {
        width: '100%',
        background: '#110e0e',
        color: '#dfca4e',
        padding: '50px'
    },
    title: {
        ...theme.typography.heading,
        textAlign: 'center',
        margin: '0px'
    }
}))

const SearchBarContainer = () => {
    const classes = useStyles(); 

    return (
        <div className={classes.container}>
            <p className={classes.title}>The Shoppies</p>
        </div>
    )
}

export default SearchBarContainer; 