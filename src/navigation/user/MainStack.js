import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
import UserProfile from '../../screens/profile/general/UserProfile';
import Login from '../../screens/auth/login/Login';
import UserHomeScreen from '../../screens/home/UserHomeScreen';
import ChooseLocation from '../../screens/other/ChooseLocation';
import BottomTabs from '../home/BottomTabs';
import AccountRole from '../../screens/auth/AccountRole';
import ProfileRegister from '../../screens/profile/kid/ProfileRegister';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="AccountRole" component={AccountRole} />
        <Stack.Screen
          options={{tabBarStyle: {display: 'none'}}}
          name="ChooseLocation"
          component={ChooseLocation}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Kidprofile" component={Kidprofile} />
        <Stack.Screen name="ProfileRegister" component={ProfileRegister} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
