import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Onboarnding from '../../screens/Intro/Onboarnding';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import BottomTabs from '../home/BottomTabs';
import Register from '../../screens/auth/register/Register';
import Login from '../../screens/auth/login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthProvider} from '../../hooks/auth/AuthContext';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('');
  React.useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userInfo');
      console.log('userLogined', userData);
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName('BottomTabs');
        } else {
          setInitialRouteName('Login');
        }
      } else {
        setInitialRouteName('SplashSceen');
      }
    } catch (error) {
      setInitialRouteName('SplashSceen');
    }
  };

  return (
    <NavigationContainer>
      {!initialRouteName ? (
        <></>
      ) : (
        <Stack.Navigator
          initialRouteName={initialRouteName}
          // initialRouteName="BottomTabs"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="SplashSceen" component={SplashSceen} />
          <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
          <Stack.Screen name="Onboarnding" component={Onboarnding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AuthProvider" component={AuthProvider} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
