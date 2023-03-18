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
  getURoleAsync,
  removeAccessTokenAsync,
  removeRoleAsync,
  removeUidAsync,
  setAccessTokenAsync,
  setTypeAsync,
  setUIdAsync,
  setURoleAsync,
} from '../../utils/StorageUtils';
import useRQGlobalState from '../../States/useRQGlobalStates';
import Loader from '../../components/loader/Loader';
import Error from '../../screens/Intro/Error';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [role, setRole] = useState(null);
  const [value] = useRQGlobalState('role', null);
  const register = async ({name, email, password, phone}) => {
    setIsLoading(true);
    try {
      const res =
        value === 'user'
          ? await regiserUser({name, email, password, phone})
          : await registerDriver({name, email, password, phone});

      let userInfo = res.data;
      console.log(userInfo);
      setIsLoading(false);
      if (res.status === 400) {
        return <Error />;
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
      console.log('dataUSS', userInfo);
      setAccessTokenAsync(userInfo.token);
      setUIdAsync(userInfo.id);
      setURoleAsync(userInfo.role);
      // setTypeAsync(userInfo.vehicle);
      // console.log('login role', userInfo.role);
      authUser();
      setIsLoading(false);
    } catch (e) {
      console.log(`login error ${e}`);
      setIsLoading(false);
    }
  };
  const logout = () => {
    setIsLoading(true);
    removeAccessTokenAsync(userInfo.token);
    removeRoleAsync(userInfo.role);
    removeUidAsync(userInfo.uid);
    setIsLoggedIn(false);
    setIsLoading(false);
    authUser();
  };

  const authUser = async () => {
    let accessToken = await getAccessTokenAsync();
    let role = await getURoleAsync();
    setIsLoggedIn(!!accessToken);
    setRole(role);
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
        role,
        success,
        authUser,
        isLoggedIn,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
