import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import SplashSceen from '../../screens/Intro/SplashSceen';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import {Colors} from '../../../assets/theme/colors';
import Hangout from '../../screens/hangout/Hangout';
import Notification from '../../screens/notification/Notification';
import UserProfile from '../../screens/profile/general/UserProfile';
import ProfileStack from '../user/ProfileStack';
import MapComponent from '../../components/map/MapComponent';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import ChooseLocation from '../../screens/other/ChooseLocation';
import MapStack from '../user/MapStack';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="MapStack"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabarStyle,
      }}>
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="user" size={24} color={Colors.black} />,
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
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
          tabBarIcon: () => (
            <Icon name="message-circle" size={24} color={Colors.black} />
          ),
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
