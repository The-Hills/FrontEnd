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
import React from 'react';

const Avatar = ({source, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.img}  source={source}/>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 90,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 90,
  },
});
