import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Login from '../../screens/auth/login/Login';
import Register from '../../screens/auth/register/Register';
import Onboarnding from '../../screens/Intro/Onboarnding';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashSceen" component={SplashSceen} />
        <Stack.Screen name="Onboarnding" component={Onboarnding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
