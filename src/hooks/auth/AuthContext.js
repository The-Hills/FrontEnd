import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {loginDriver, loginUser, regiserUser, URL} from '../../API/auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getAccessTokenAsync,
  removeAccessTokenAsync,
  removeRoleAsync,
  removeUidAsync,
  setAccessTokenAsync,
  setUIdAsync,
  setURoleAsync,
} from '../../utils/StorageUtils';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [initialRouteName, setInitialRouteName] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = useState();

  const register = async ({name, email, password, phone}, role = '') => {
    setIsLoading(true);
    // return axios
    //   .post(`${URL}auth/register`, {
    //     email,
    //     name,
    //     password,
    //     phone,
    //   })
    //   .then(res => {

    try {
      const res = await regiserUser({name, email, password, phone});
      let userInfo = res.data;
      setUserInfo(userInfo);
      console.log('Datane', userInfo);
      setIsLoading(false);
    } catch (e) {
      console.log(`register error ${e}`);
      setIsLoading(false);
    }
  };

  const login = async ({email, password}, role = 'user') => {
    setIsLoading(true);
    // return axios
    //   .post(`${URL}auth/login`, {
    //     email,
    //     password,
    //   })\
    try {
      const res =
        role === 'user'
          ? await loginUser({email, password})
          : await loginDriver({email, password});

      let userInfo = res.data;
      setUserInfo(userInfo);
      console.log('user info after Login', userInfo);

      // AsyncStorage.setItem(
      //   'userInfo',
      //   JSON.stringify({...userInfo, loggedIn: true}),
      // );

      // save user basic info to async storage
      setAccessTokenAsync(userInfo.token);
      setUIdAsync(userInfo.id);
      setURoleAsync(userInfo.role);

      console.log(AsyncStorage.getAllKeys());
      authUser();
      setIsLoading(false);
    } catch (e) {
      console.log(`login error ${e}`);
      setIsLoading(false);
    }
  };
  const logout = () => {
    setIsLoading(true);
    // AsyncStorage.removeItem('userInfo');
    removeAccessTokenAsync(userInfo.token);
    removeRoleAsync(userInfo.role);
    removeUidAsync(userInfo.uid);
    // setUserInfo({});
    setIsLoggedIn(false);
    setIsLoading(false);
    authUser();
  };

  const authUser = async () => {
    let accessToken = await getAccessTokenAsync();
    setIsLoggedIn(!!accessToken);
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
        isLoggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
