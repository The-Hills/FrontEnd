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

const SavedLocations = ({url, onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,style]}>
      <View style={styles.img}>
        <Image style={[GeneralStyle.img]} source={url} />
      </View>
      <Text style={[GeneralStyle.text, styles.text]}>Home</Text>
    </TouchableOpacity>
  );
};

export default SavedLocations;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',  
    justifyContent: 'center',
    backgroundColor: Colors.while,

  },
  img: {
    width: 74,
    height: 74,
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
  text: {
    color: Colors.black,
  },
});
