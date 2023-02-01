import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
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
import Register from './src/screens/auth/register';
import Login from './src/screens/auth/login';
function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pikid</Text>
      {/* <Register></Register> */}
      <Login></Login>
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 40,
  },
});
