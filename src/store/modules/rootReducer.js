import {combineReducers} from 'redux';

import cart from './cart/reducer';
import description from './description/reducer'

export default combineReducers({
  cart,
  description,
})