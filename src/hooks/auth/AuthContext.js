import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {
  loginDriver,
  loginUser,
  regiserUser,
  registerDriver,
  URL,
} from '../../API/auth';
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
import useRQGlobalState from '../../States/useRQGlobalStates';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [value] = useRQGlobalState('role', null);
  const register = async ({name, email, password, phone}) => {
    console.log('chay di');
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
      const res =
        value === 'user'
          ? await regiserUser({name, email, password, phone})
          : await registerDriver({name, email, password, phone});

      let userInfo = res.data;
      console.log(userInfo);
      // setUserInfo(userInfo);
      setIsLoading(false);
      if (res.status === 200) {
        setSccess(true);
      }
      return res;
    } catch (e) {
      console.log(`register error ${e}`);
      setError(true);
      setIsLoading(false);
    }
  };

  const login = async ({email, password}) => {
    setIsLoading(true);
    try {
      const res =
        value === 'user'
          ? await loginUser({email, password})
          : await loginDriver({email, password});
      let userInfo = res.data;
      setUserInfo(userInfo);
      // console.log('user info after Login', userInfo);
      setAccessTokenAsync(userInfo.token);
      setUIdAsync(userInfo.id);
      setURoleAsync(userInfo.role);
      // console.log(AsyncStorage.getAllKeys());
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
        userInfo,
        register,
        login,
        logout,
        success,
        authUser,
        isLoggedIn,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
