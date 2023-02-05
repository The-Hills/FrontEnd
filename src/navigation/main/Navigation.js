import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Onboarnding from '../../screens/Intro/Onboarnding';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import BottomTabs from '../home/BottomTabs';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashSceen"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
        <Stack.Screen name="Onboarnding" component={Onboarnding} />
        <Stack.Screen name="SplashSceen" component={SplashSceen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
