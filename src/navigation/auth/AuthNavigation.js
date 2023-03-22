import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Onboarnding from '../../screens/Intro/Onboarnding';
import Login from '../../screens/auth/login/Login';
import Register from '../../screens/auth/register/Register';
import AccountRole from '../../screens/auth/AccountRole';
import PersonalDocs from '../../screens/auth/PersonalDocs';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashSceen">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashSceen" component={SplashSceen} />
        <Stack.Screen name="Onboarnding" component={Onboarnding} />
        <Stack.Screen name="AccountRole" component={AccountRole} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PersonalDocs" component={PersonalDocs} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
