import {
    WEATHER_DATA_LOADING,
    WEATHER_DATA_LOADING_SUCCESS,
    WEATHER_DATA_LOADING_FAIL,
} from './action_types';

export const loadWeatherDataAction = ()=> {

    return (dispatch) => {
      dispatch({type:WEATHER_DATA_LOADING});
      fetchData(dispatch);
    }

}

const fetchData = (dispatch) => {

    //TO DO - place api calls and urls in separate location
    const axios = require('axios');

    return axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=6.925666038385111&lon=79.862846197489&exclude=hourly,current,minutely&appid=8df738140c54944fcc291f8a413a0d7c&units=metric')
    .then(function (response) {
        // handle success
        console.log("responseJson : "+response.data)
        loadWeatherDataSuccessAction(response.data.daily,dispatch);
    })
    .catch(function (error) {
        // handle error
        console.log("error : "+error)
        loadWeatherDataFailAction(dispatch);
    })
    .then(function () {
        // always executed
    });
    
}

export const loadWeatherDataSuccessAction = (data,dispatch) => {

  dispatch({type:WEATHER_DATA_LOADING_SUCCESS,weatherData:data});

}

export const loadWeatherDataFailAction = (dispatch) => {

  dispatch({type:WEATHER_DATA_LOADING_FAIL});
    
}