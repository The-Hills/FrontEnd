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
import DriverProfile from '../../screens/profile/driver/DriverProfile';
import DriverBottomTabs from './DriverBottomTabs';
import UserProfile from '../../screens/profile/general/UserProfile';
import MapScreenDriver from '../../screens/other/MapScreenDriver';
import Scan from '../../screens/QRScan/Scan';
import Completed from '../../screens/booking/Completed';
const Stack = createNativeStackNavigator();
const DriverStack = () => {
  return (
    <Stack.Navigator initialRouteName="DriverBottomTabs">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="DriverBottomTabs" component={DriverBottomTabs} />

        <Stack.Screen name="DriverProfile" component={DriverProfile} />
        <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="MapScreenDriver" component={MapScreenDriver} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Completed" component={Completed} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default DriverStack;

const styles = StyleSheet.create({});
