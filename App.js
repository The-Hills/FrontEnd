import React from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Button from './src/components/general/Button';
import Input from './src/components/general/Input';
import LogoPkid from './src/components/general/LogoPkid';
import Avatar from './src/components/general/Avatar';
import Navigation from './src/navigation/main/Navigation';
import SplashSC from './src/screens/vu/Onboarnding2';
import Onboarnding3 from './src/screens/vu/Onboarnding3';
import PointScreen from './src/screens/vu/PointScreen';
import Profile from './src/screens/vu/Profile';

function App() {
  return(
  // <Navigation />
  // <Login></Login>
//  <PointScreen/> 
<Profile></Profile>
  
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BB7D6',
  },
  text: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 40,
  },
});
