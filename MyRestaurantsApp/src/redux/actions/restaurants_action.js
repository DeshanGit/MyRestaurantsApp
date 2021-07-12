import {
    RESTAURANTS_DATA_LOADING,
    RESTAURANTS_DATA_LOADING_SUCCESS,
    RESTAURANTS_DATA_LOADING_FAIL,
} from './action_types';

export const loadRestaurantsDataAction = (lati, longi)=> {

    return (dispatch) => {
      dispatch({type:RESTAURANTS_DATA_LOADING});
      fetchData(dispatch,lati, longi);
    }

}

const fetchData = (dispatch, lati, longi) => {

    //TO DO - place api calls and urls in separate location
    const axios = require('axios');

    return axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lati+','+longi+'&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyA0uecV2WL3HqL2-hxZJOGChgOTZL0WhsM')
    .then(function (response) {
        // handle success
        console.log("responseJson : "+JSON.stringify(response.data))
        loadRestaurantsDataSuccessAction(response.data,dispatch);
    })
    .catch(function (error) {
        // handle error
        console.log("error : "+error)
        loadRestaurantsDataFailAction(dispatch);
    })
    .then(function () {
        // always executed
    });

}

export const loadRestaurantsDataSuccessAction = (data,dispatch) => {

  dispatch({type:RESTAURANTS_DATA_LOADING_SUCCESS,restaurantsData:data});

}

export const loadRestaurantsDataFailAction = (dispatch) => {

  dispatch({type:RESTAURANTS_DATA_LOADING_FAIL});
    
}