import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserProfile from '../../screens/profile/UserProfile';
import Icon from 'react-native-vector-icons/Feather';
import SplashSceen from '../../screens/Intro/SplashSceen';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import { Colors } from '../../../assets/theme/colors';
import Hangout from '../../screens/hangout/Hangout';
import Notification from '../../screens/notification/Notification';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="UserHomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="user" size={24} color={Colors.black} />,
        }}
      />
      <Tab.Screen
        name="UserHomeScreen"
        component={UserHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" size={24} color={Colors.black} />,
        }}
      />
      <Tab.Screen
        name="Hangout"
        component={Hangout}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="message-circle" size={24} color={Colors.black} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="bell" size={24} color={Colors.black} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;