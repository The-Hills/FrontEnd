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
import {GeneralStyle} from '../../styles/generalStyles';
import {Width} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';

const Vehicle = ({url, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.img}>
      <Image style={[GeneralStyle.img]} source={url} />
    </TouchableOpacity>
  );
};

export default Vehicle;

const styles = StyleSheet.create({
  img: {
    width: (Width - 60) / 2,
    height: 120,
    backgroundColor: Colors.while,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
});
