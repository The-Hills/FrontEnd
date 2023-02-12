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


function App() {
  return <Navigation />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BB7D6',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
  },
});
export default App;

