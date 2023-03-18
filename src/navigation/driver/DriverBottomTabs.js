import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DriverProfile from '../../screens/profile/driver/DriverProfile';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
import Hangout from '../../screens/hangout/Hangout';
import Notification from '../../screens/notification/Notification';
import {Colors} from '../../../assets/theme/colors';
import {useDriverQuery, useUpdateDriver} from '../../hooks/useUser';
import Loader from '../../components/loader/Loader';
import Error from '../../screens/Intro/Error';
import useRQGlobalState from '../../States/useRQGlobalStates';
const Tab = createBottomTabNavigator();

const DriverBottomTabs = () => {
  const [currentLocation, setCurrentLocation] = useRQGlobalState('location', {
    latitude: 0,
    longitude: 0,
  });

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs to access your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            // Do something with the user's location
          },
          error => {
            // console.log(error);
            // Handle error
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied');
        // Handle permission denied
      }
    } catch (err) {
      console.warn('loi:', err);
    }
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);
  const {isLoading, isError} = useDriverQuery();
  if (isLoading) {
    return (
      <View>
        <Loader visible={true} />
      </View>
    );
  }
  if (isError) {
    return <Error />;
  }

  return (
    <Tab.Navigator
      initialRouteName="DriverHomeScreen"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabarStyle,
      }}>
      <Tab.Screen
        name="DriverProfile"
        component={DriverProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DriverHomeScreen"
        component={DriverHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hangout"
        component={Hangout}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="message-circle"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="bell"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DriverBottomTabs;

const styles = StyleSheet.create({
  container: {},
  tabarStyle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    // backgroundColor: 'red',
  },
});
