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
import SplashSceen from './src/screens/Intro/SplashSceen';
import Login from './src/screens/auth/login';

function App() {
  return(
  // <Navigation />
  <Login></Login>
  
  );
}

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
