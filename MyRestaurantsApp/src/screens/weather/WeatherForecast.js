import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import {ActionCreators} from '../../redux/actions/index'
import WeatherListItem from '../../components/weatherlistitem/WeatherListItem';
import styles from './Styles';

const WeatherForecast = (props) => {

    useEffect(() => {  
        props.loadWeatherDataAction();
    },[]);

    const onRefresh = () =>{
        props.loadWeatherDataAction();
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={props.weatherDataState.weatherData}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item}) =>(
                    <WeatherListItem item={item}/>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={props.weatherDataState.isWeatherDataLoading}
                        onRefresh={onRefresh}
                        colors={['#00c6f1']}
                    />
                }
            />
        </View>
    );

}

const mapStateToProps = state => ({
    weatherDataState: state.weatherDataState
})
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators.WeatherActionCreators, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);