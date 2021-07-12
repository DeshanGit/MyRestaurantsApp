import {
    RESTAURANTS_DATA_LOADING,
    RESTAURANTS_DATA_LOADING_SUCCESS,
    RESTAURANTS_DATA_LOADING_FAIL,
} from '../actions/action_types';

const initialState = {
    isRestaurantsDataLoading:false,
    restaurantsData:null,
}

const restaurantsDataState = (state=initialState,action) => {

    switch (action.type) {

        case RESTAURANTS_DATA_LOADING:
        console.log("RESTAURANTS_DATA_LOADING")
            return {...state,isRestaurantsDataLoading:true}
            break;

        case RESTAURANTS_DATA_LOADING_SUCCESS:
        console.log("RESTAURANTS_DATA_LOADING_SUCCESS")
            return {...state,isRestaurantsDataLoading:false,restaurantsData:action.restaurantsData}
            break;

        case RESTAURANTS_DATA_LOADING_FAIL:
        console.log("RESTAURANTS_DATA_LOADING_FAIL")
            return {...state,isRestaurantsDataLoading:false}
            break;

        default:
            return state

    }

}

export default restaurantsDataState;