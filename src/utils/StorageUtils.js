import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'token';
const UID_KEY = 'uid';
const ROLE_KEY = 'role';

export const getAccessTokenAsync = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

export const setAccessTokenAsync = async token => {
  return await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const removeAccessTokenAsync = async () => {
  return await AsyncStorage.removeItem(TOKEN_KEY);
};

export const getUIdAsync = async () => {
  return await AsyncStorage.getItem(UID_KEY);
};

export const setUIdAsync = async id => {
  return await AsyncStorage.setItem(UID_KEY, id);
};

export const removeUidAsync = async () => {
  return await AsyncStorage.removeItem(UID_KEY);
};

export const getURoleAsync = async () => {
  return await AsyncStorage.getItem(UID_KEY);
};

export const setURoleAsync = async role => {
  return await AsyncStorage.setItem(ROLE_KEY, role);
};

export const removeRoleAsync = async () => {
  return await AsyncStorage.removeItem(ROLE_KEY);
};