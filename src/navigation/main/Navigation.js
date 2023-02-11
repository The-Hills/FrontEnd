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
import {AuthContext, AuthProvider} from '../../hooks/auth/AuthContext';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const {userInfo} = useContext(AuthContext);
  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    userInfo.accessToken ? setInitialRouteName('BottomTabs') : setInitialRouteName('SplashSceen')
  };

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SplashSceen}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashSceen" component={SplashSceen} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
          <Stack.Screen name="Onboarnding" component={Onboarnding} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default Navigation;
