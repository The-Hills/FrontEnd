import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Onboarnding from '../../screens/Intro/Onboarnding';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import BottomTabs from '../home/BottomTabs';
import Register from '../../screens/auth/register/Register';
import Login from '../../screens/auth/login/Login';
import RegisterDriverScreen from '../../screens/Intro/RegisterDriverScreen';
import PersonalDocs from '../../screens/Giang/PersonalDocs';
import DriverOfProfile from '../../screens/Giang/DriverOfProfile';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DriverOfProfile"
        // initialRouteName="SplashSceen"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
        {/* <Stack.Screen name="Onboarnding" component={Onboarnding} /> */}
        {/* <Stack.Screen name="SplashSceen" component={SplashSceen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="RegisterDriverScreen" component={RegisterDriverScreen}/> */}
        {/* <Stack.Screen name='PersonalDocs' component={PersonalDocs}/> */}
        <Stack.Screen name="DriverOfProfile" component={DriverOfProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
