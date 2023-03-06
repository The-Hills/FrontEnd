import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DriverProfile from '../../screens/profile/driver/DriverProfile';
import DriverHomeScreen from '../../screens/home/DriverHomeScreen';
import Hangout from '../../screens/hangout/Hangout';
import Notification from '../../screens/notification/Notification';
import {Colors} from '../../../assets/theme/colors';
const Tab = createBottomTabNavigator();

const DriverBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="DriverHomeScreen"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabarStyle,
      }}>
      <Tab.Screen
        name="DriverProfile"
        component={DriverProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DriverHomeScreen"
        component={DriverHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hangout"
        component={Hangout}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="message-circle"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="bell"
              size={focused ? 30 : 24}
              color={focused ? Colors.main : Colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DriverBottomTabs;

const styles = StyleSheet.create({
  container: {},
  tabarStyle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 50,
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    // backgroundColor: 'red',
  },
});
