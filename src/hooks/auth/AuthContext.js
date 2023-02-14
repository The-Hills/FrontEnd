import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {URL} from '../../API/auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
        console.log('user info: ', userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        return res;
      })
      .catch(e => {
        console.log();
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
        console.log('user info after Login',  userInfo);
        AsyncStorage.setItem(
          'userInfo',
          JSON.stringify({userInfo, loggedIn: true}),
        );
        setIsLoading(false);
      })
      .catch(e => {
          console.log(`login error ${e}`);
          setIsLoading(false);
        });
  };

  const logout = () => {
    setIsLoading(true);
    axios
      .post(
        `${URL}auth/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
        navigation.navigate('Login');
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
