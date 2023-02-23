import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
import UserProfile from '../../screens/profile/general/UserProfile';
import Login from '../../screens/auth/login/Login';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import ChooseLocation from '../../screens/other/ChooseLocation';
const Stack = createNativeStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
      <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
    </Stack.Navigator>
  );
};

export default MapStack;

const styles = StyleSheet.create({});
