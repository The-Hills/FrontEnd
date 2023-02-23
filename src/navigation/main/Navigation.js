import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Onboarnding from '../../screens/Intro/Onboarnding';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import BottomTabs from '../home/BottomTabs';
import Register from '../../screens/auth/register/Register';
import Login from '../../screens/auth/login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, AuthProvider} from '../../hooks/auth/AuthContext';
import UserProfile from '../../screens/profile/general/UserProfile';
import Loader from '../../components/loader/Loader';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
import DriverStack from '../driver/DriverStack';
import MainStack from '../user/MainStack';
import AuthNavigation from '../auth/AuthNavigation';

const Navigation = () => {
  const {userInfo} = useContext(AuthContext);
  console.log('Data day', userInfo);

  return (
    <NavigationContainer>
      <MainStack />
      {/* {userInfo.loggedIn ? <MainStack /> : <AuthNavigation/>} */}
    </NavigationContainer>
  );
};

export default Navigation;
