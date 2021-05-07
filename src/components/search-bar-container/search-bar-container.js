import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SearchInput from '../search-bar/search-bar';

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
    container2: {
        color: '#dfca4e',
        textAlign: 'center',
        paddingBottom: '30px'
    },
    container: {
        width: '100%',
        // background: '#110e0e',
        background: 'transparent',
        color: '#dfca4e',
        padding: '10px 50px 50px 50px',
        // padding: '50px',
        ...theme.typography.normal,
        textAlign: 'center',
        // paddingBottom: '100px !important'
    },
    title: {
        ...theme.typography.heading,
        margin: '20px 20px 0px 20px'
        // textAlign: 'center',
        // marginTop: 
        // padding: '0px'
    },
    imageContainer: {
        width: '100%',
        height: '600px',
        overflow: 'hidden'
      },
      backgroundImage:{
        width: '100%',
        // opacity: '0.8'
        // height: '500px'
      },
      heading: {
          border: 'solid',
          padding: '0px !important',
          margin: '0px !important',
          display: 'inline-block',
          background: 'rgba(41, 40, 38, 0.5)',
        //   opacity: '0.5'
      },
      searchBar: {
          width: '50%'
      }
}))

const SearchBarContainer = () => {
    const classes = useStyles(); 

    return (
        <div className={classes.container2}>
            {/* <div className={classes.imageContainer}>
                    <img src='/black-leaf-background.jpg' className={classes.backgroundImage} />
            </div> */}
            <div className={classes.container}>
            <div className={classes.heading}>
                <p className={classes.title}>The Shoppies</p>
                <p style={{marginTop: '0px'}}>Movie Awards</p>
            </div>
        </div>
        <SearchInput className={classes.searchBar}/>
        </div>
    )  
}

export default SearchBarContainer; 