import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root', 
    storage,
    whitelist: ['user']
}

const rootReducer = userReducer; 

export default persistReducer(persistConfig, rootReducer);