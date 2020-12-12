import {createStore} from 'redux';
import CakeReducer from './Cake/CakeReducer';
import rootReducer from './rootReducer';

const store = createStore(rootReducer)

export default store