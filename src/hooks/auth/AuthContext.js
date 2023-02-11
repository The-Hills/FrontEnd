import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../../API/auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = async ({
    fullName,
    email,
    password,
    password_confirmation,
  }) => {
    setIsLoading(true);
    return axios
      .post(`${BASE_URL}/account/register`, {
        email,
        fullName,
        password,
        password_confirmation,
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
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
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
        `${BASE_URL}/auth/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.accessToken}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
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
