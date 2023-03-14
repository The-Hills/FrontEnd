import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../../hooks/auth/AuthContext';
import MainStack from '../user/MainStack';
import AuthNavigation from '../auth/AuthNavigation';
import DriverStack from '../driver/DriverStack';
import {getAccessTokenAsync, getURoleAsync} from '../../utils/StorageUtils';
import {useUserQuery} from '../../hooks/useUser';
import Loader from '../../components/loader/Loader';

const Navigation = () => {
  const {isLoggedIn, role} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* <DriverStack/> */}
      {/* <MainStack /> */}
      {isLoggedIn ? (
        role === 'user' ? (
          <MainStack />
        ) : (
          <Loader />
        )
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
