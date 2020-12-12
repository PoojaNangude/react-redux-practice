import {combineReducers} from 'redux';
import CakeReducer from './Cake/CakeReducer';
import IceCreamReducer from './IceCream/IceCreamReducer';

const rootReducer = combineReducers({
    cake : CakeReducer,
    icecream : IceCreamReducer
})

 export default rootReducer;