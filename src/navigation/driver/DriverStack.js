import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Login from '../../screens/auth/login/Login';
import Register from '../../screens/auth/register/Register';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
import Onboarnding from '../../screens/Intro/Onboarnding';
const Stack = createNativeStackNavigator();
const DriverStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashSceen" component={SplashSceen} />
        <Stack.Screen name="Onboarnding" component={Onboarnding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Kidprofile" component={Kidprofile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default DriverStack;

const styles = StyleSheet.create({});
