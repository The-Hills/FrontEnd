import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
import SplashSceen from '../../screens/Intro/SplashSceen';
import Onboarnding from '../../screens/Intro/Onboarnding';
import BottomTabs from '../home/BottomTabs';
import Register from '../../screens/auth/register/Register';
import Login from '../../screens/auth/login/Login';
import UserHomeScreen from '../../screens/home/UserHomeScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
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
        <>
          <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashSceen" component={SplashSceen} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen
              name="DriverHomeScreen"
              component={DriverHomeScreen}
            />
            <Stack.Screen name="Onboarnding" component={Onboarnding} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
