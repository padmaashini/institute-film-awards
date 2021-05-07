import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

import SearchInput from '../search-bar/search-bar';

const useStyles = makeStyles(styles);

const SearchBarContainer = (props) => {
  const { title, subText, searchBar } = props; 
  const classes = useStyles(); 

    return (
        <div className={classes.root}>
            <div className={classes.container}>
              <div className={classes.heading}>
                  <p className={classes.title}>{title}</p>
                  { subText && <p className={classes.subText}>Movie Awards</p>}
              </div>
          </div>
          { searchBar && <SearchInput className={classes.searchBar}/>}
        </div>
    )  
}

export default SearchBarContainer; 