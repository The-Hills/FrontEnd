import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../../hooks/auth/AuthContext';
import MainStack from '../user/MainStack';
import AuthNavigation from '../auth/AuthNavigation';

const Navigation = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <MainStack />
      {/* {userInfo.loggedIn ? <MainStack /> : <AuthNavigation/>} */}
    </NavigationContainer>
  );
};

export default Navigation;
