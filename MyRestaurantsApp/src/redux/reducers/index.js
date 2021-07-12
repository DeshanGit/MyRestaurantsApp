import {combineReducers} from 'redux';

import weatherDataState from './weather_reducer';
import restaurantsDataState from './restaurants_reducer';

export default combineReducers({
    weatherDataState,
    restaurantsDataState,
});