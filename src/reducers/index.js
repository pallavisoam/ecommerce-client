import { userReducer } from './userReducer.js';
import {combineReducers} from 'redux';
import { searchReducer } from './searchReducer.js';
import {cartReducer} from './cartReducer.js';
import {drawerReducer} from './drawerReducer.js';

const rootReducer = combineReducers({
    user:userReducer,
    search:searchReducer,
    cart:cartReducer,
    drawer:drawerReducer,
});
export default rootReducer;