import 'react-native-gesture-handler';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Login from './login/Login';
import WeatherForecast from './weather/WeatherForecast';
import RestaurantsNearby from './restaurants/RestaurantsNearby';

import auth from '@react-native-firebase/auth';
import { AuthContext, AuthProvider } from '../auth/AuthProvider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator initialRouteName="WeatherForecast"
      screenOptions={({route})=>({
        tabBarIcon: ({focused, size, color})=>{
          let iconName;
          if(route.name === 'Weather Forecast'){
            iconName = 'cloud-sun-rain';
            size = focused ? 25 : 20;
          }else if(route.name === 'Restaurants Nearby'){
            iconName = 'utensils';
            size = focused ? 25 : 20;
          }
          return(
            <FontAwesome5
              name={iconName}
              size={size}
              color={color}/>
          )
        }
      })}
      tabBarOptions={{
        activeTintColor:'#00c6f1',
        inactiveTintColor:'#acacac',
      }}>
      <Tab.Screen name="Weather Forecast" component={WeatherForecast}/>
      <Tab.Screen name="Restaurants Nearby" component={RestaurantsNearby}/>
    </Tab.Navigator>
  );

}

const HomeNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNavigator}/>
    </Stack.Navigator>
  );

}

const StackNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Tabs" component={HomeNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
  );

}

const MainNavigator = () => {

  const {user, setUser} = useContext(AuthContext); 
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      { user ? <HomeNavigator/> : <StackNavigator/> }
    </NavigationContainer>
  );

}

const Providers = () => {

  return (
    <AuthProvider>
      <MainNavigator/>
    </AuthProvider>
  );

}

export default Providers;