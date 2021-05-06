import React, { useState, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux'; 

import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import { setUserInput } from '../../redux/user/user.actions';

const useStyles = makeStyles(theme => ({
  icon: {
    margin:'5px', 
    marginRight: '10px'
  },
}))

const SearchInput = ({
    setUserInput
}) => {

    const [value, setValue] = useState('');
//   const inputRef = React.createRef();
//   const { t } = useTranslation('common');
//   let firstUpdate = useRef(true);

//   const WAIT_INTERVAL = 400;
//   let timerID;

//   React.useEffect(() => {
//     if (onMountFocus && inputRef && inputRef.current) inputRef.current.focus();
//   }, []);

//   useLayoutEffect(() => {
//     if(firstUpdate.current){
//       firstUpdate.current = false; 
//       return; 
//     }
//     clearTimeout(timerID);
//     timerID = setTimeout(() => {
//       onSearchInputChange(value);
//     }, WAIT_INTERVAL);
//   },[value])
    const onInputChange = (event) => {
        setUserInput(event.target.value)
        setValue(event.target.value)
    }
//   const searchInputChangeHandler = async (event) => {
//     if (inputRef.current && inputRef.current.value !== null) {
//       setValue(inputRef.current.value)
//     }    
//   };

  return (
      <FormControl style={{width: '800px'}}>
          <InputBase
            id='search-input'
            placeholder={'Search Movies'}
            endAdornment={<SearchIcon/>}
            fullWidth={true}
            value={value}
            onChange={onInputChange}
            // autocomplete="off"
            style={{color: 'black', fontWeight: '500', background: 'rgba(255, 255, 255, 0.8)', height: '40px', borderRadius: '15px', padding: '10px'}}
          />
      </FormControl>
  );
};

const mapDispatchToProps = dispatch => ({
    setUserInput: input => dispatch(setUserInput(input))
})

export default connect(null, mapDispatchToProps)(SearchInput);
