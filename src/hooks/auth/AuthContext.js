import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {URL} from '../../API/auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [initialRouteName, setInitialRouteName] = React.useState('');

  const register = async ({name, email, password, phone}) => {
    setIsLoading(true);
    return axios
      .post(`${URL}auth/register`, {
        email,
        name,
        password,
        phone,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log('Datane',userInfo);
        setIsLoading(false);
        return res;
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = async ({email, password}) => {
    setIsLoading(true);
    return axios
      .post(`${URL}auth/login`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log('user info after Login', userInfo);
        AsyncStorage.setItem(
          'userInfo',
          JSON.stringify({userInfo, loggedIn: true}),
        );
        authUser();
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);
    authUser();
  };

  const authUser = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (error) {
      console.log(`is logged in error ${error}`);
    }
  };
  useEffect(() => {
    authUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        initialRouteName,
        userInfo,
        register,
        login,
        logout,
        authUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
