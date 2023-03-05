import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Login from '../../screens/auth/login/Login';
import Register from '../../screens/auth/register/Register';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
import Onboarnding from '../../screens/Intro/Onboarnding';
import {Screen} from 'react-native-screens';
import AccountRole from '../../screens/auth/AccountRole';
import PersonalDocs from '../../screens/auth/PersonalDocs';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
const Stack = createNativeStackNavigator();
const DriverStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
        <Stack.Screen name="AccountROle" component={AccountRole} />
        <Stack.Screen name="PersonalDocs" component={PersonalDocs} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default DriverStack;

const styles = StyleSheet.create({});
