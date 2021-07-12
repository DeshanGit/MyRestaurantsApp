import {
    WEATHER_DATA_LOADING,
    WEATHER_DATA_LOADING_SUCCESS,
    WEATHER_DATA_LOADING_FAIL,
} from '../actions/action_types';

const initialState = {
    isWeatherDataLoading:false,
    weatherData:null,
}

const weatherDataState = (state=initialState,action) => {

    switch (action.type) {

        case WEATHER_DATA_LOADING:
        console.log("WEATHER_DATA_LOADING")
            return {...state,isWeatherDataLoading:true}
            break;

        case WEATHER_DATA_LOADING_SUCCESS:
        console.log("WEATHER_DATA_LOADING_SUCCESS")
            return {...state,isWeatherDataLoading:false,weatherData:action.weatherData}
            break;

        case WEATHER_DATA_LOADING_FAIL:
        console.log("WEATHER_DATA_LOADING_FAIL")
            return {...state,isWeatherDataLoading:false}
            break;

        default:
            return state

    }

}

export default weatherDataState;