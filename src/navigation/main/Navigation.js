import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';

import BottomTabs from '../home/BottomTabs';
import Register from '../../screens/auth/register/Register';
import Login from '../../screens/auth/login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, AuthProvider} from '../../hooks/auth/AuthContext';
import UserProfile from '../../screens/profile/general/UserProfile';
import Loader from '../../components/loader/Loader';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
import UserStack from '../user/UserStack';
import DriverStack from '../driver/DriverStack';

const Navigation = () => {
  const {userInfo} = useContext(AuthContext);
  console.log('Data day', userInfo);

  return (
    <NavigationContainer>
      {userInfo.loggedIn ? <BottomTabs /> : <UserStack />}
    </NavigationContainer>
  );
};

export default Navigation;
