import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import nomineeReducer from './nominees/nominees.reducer';

const persistConfig = {
    key: 'root', 
    storage,
    blacklist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    nominees: nomineeReducer
}); 

export default persistReducer(persistConfig, rootReducer);