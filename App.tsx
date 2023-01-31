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
function App() {
  return (
    <View style={styles.container}>
      <Icon name="image" size={30} color="#ffffff" />
      <Text style={styles.text}>Pikid</Text>
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
