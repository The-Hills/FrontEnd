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
import MapComponent from '../../components/map/MapComponent';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import ChooseLocation from '../../screens/other/ChooseLocation';
import {useUserQuery} from '../../hooks/useUser';
import Loader from '../../components/loader/Loader';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {isLoading, isError, error} = useUserQuery();
  if (isLoading) {
    return (
      <View>
        <Loader visible={true} />
      </View>
    );
  }
  if (isError) {
    return <Error />;
  }
  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName="UserHomeScreen"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabarStyle,
      }}>
      <Tab.Screen
        name="Profile"
        component={UserProfile}
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
        name="UserHomeScreen"
        component={UserHomeScreen}
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
