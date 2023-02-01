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

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pikid</Text>
      <Icon name='codepen' size={30}/>
      <Register/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
  },
});
export default App;

