import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import {ActionCreators} from '../../redux/actions/index'
import styles from './Styles';

const RestaurantsNearby = (props) => {

    const [myLocation, setMyLocation] = useState({
        latitude:0.0,
        longitude:0.0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const {latitude, longitude} = myLocation

    permissionCheck = async (): Promise<bool> => {
        let isPermissionGranted = false
         try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                isPermissionGranted = true
            } else {
                console.log("Permissions Not Granted");
            }
        } catch (err) {
                console.log("Error : "+err);
        }
        return isPermissionGranted
    }

    getCurrentPosition = async () => {
        await Geolocation.getCurrentPosition(
            (position) => {

                console.log("latitude : "+position.coords.latitude);
                console.log("longitude : "+position.coords.longitude);

                setMyLocation({
                    ...myLocation,
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude,
                })

            },
            (error) => {
                console.log("Error : "+error);
                },
            { 
                timeout: 15000,
                maximumAge: 0, 
                accuracy: {
                android: 'high',
                ios: 'best',
                },
                enableHighAccuracy: true,
                distanceFilter: 0,
                forceLocationManager: true,
            }
        )
    }

    useEffect(() => {  

        if(this.permissionCheck()){
            this.getCurrentPosition()
        }

        //TO DO - Retreaving nearby restuarants data from google Places API 
        props.loadRestaurantsDataAction('-33.8670522','151.1957362');//Test

    },[]);

    return(
        <View style={styles.container}>
            <MapView
                style={styles.mapView}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={myLocation}>
                <Marker
                    coordinate={myLocation}
                    title={"My Location"}/>
            </MapView>
        </View>
    )

}

const mapStateToProps = state => ({
    restaurantsDataState: state.restaurantsDataState
})
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators.RestaurantsActionCreators, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsNearby);