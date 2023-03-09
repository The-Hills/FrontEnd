import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../../hooks/auth/AuthContext';
import MainStack from '../user/MainStack';
import AuthNavigation from '../auth/AuthNavigation';
import DriverStack from '../driver/DriverStack';
import { getAccessTokenAsync } from '../../utils/StorageUtils';

const Navigation = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* <DriverStack/> */}
      {/* <MainStack /> */}
      {isLoggedIn ? <MainStack /> : <AuthNavigation/>}
    </NavigationContainer>
  );
};

export default Navigation;
