import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Kidprofile from '../../screens/profile/kid/Kidprofile';
import UserProfile from '../../screens/profile/general/UserProfile';
import Login from '../../screens/auth/login/Login';
const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='UserProfile' component={UserProfile}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name='Kidprofile' component={Kidprofile}/>
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})