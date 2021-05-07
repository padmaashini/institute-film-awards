import React, { useState, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux'; 

import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import { setUserInput } from '../../redux/user/user.actions';

import styles from './styles';

const useStyles = makeStyles(styles);

const SearchInput = ({ setUserInput }) => {
  const [value, setValue] = useState('');
  const classes = useStyles(); 

  const onInputChange = (event) => {
    setUserInput(event.target.value);
    setValue(event.target.value);
  }

  return (
      <FormControl className={classes.formControl}>
          <InputBase
            id='search-input'
            placeholder={'Search Movies'}
            endAdornment={<SearchIcon/>}
            fullWidth={true}
            value={value}
            onChange={onInputChange}
            className={classes.searchBar}
          />
      </FormControl>
  );
};

const mapDispatchToProps = dispatch => ({
    setUserInput: input => dispatch(setUserInput(input))
})

export default connect(null, mapDispatchToProps)(SearchInput);
