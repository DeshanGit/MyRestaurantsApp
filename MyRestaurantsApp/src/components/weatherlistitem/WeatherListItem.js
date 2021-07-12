import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { getDateString } from '../../helpers/Helpers';
import styles from './Styles';

const WeatherForecast = ({item}) => {

    return(

        <View style={styles.container}>
            <View style={styles.innerLayout}>
                <Text style={styles.textDate}>{getDateString(item.dt)}</Text>
            </View>
            <View style={styles.innerLayout}>
                <Text style={styles.textHeat}>{item.feels_like.day}°C</Text>
            </View>
        </View>

    );

}

export default WeatherForecast;