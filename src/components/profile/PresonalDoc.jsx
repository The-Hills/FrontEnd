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
import {Colors} from '../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import {GeneralStyle} from '../../styles/generalStyles';
import {FontFamily} from '../../../assets/theme/fontFamily';

const PresonalDoc = ({
  label,
  source,
  description,
  onChangeCamera,
  onChangeUpload,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text
          style={{
            color: Colors.black,
            fontFamily: FontFamily.Medium,
            fontSize: 18,
          }}>
          {label}
        </Text>
        <Text
          style={{
            color: Colors.black,
            fontFamily: FontFamily.Light,
            fontSize: 11,
          }}>
          {description}
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onChangeUpload}
          style={styles.btnUpload}>
          <View style={[styles.icon]}>
            <Icon name="upload-cloud" size={24} color={Colors.black} />
          </View>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 18,
            }}>
            Upload file
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={onChangeCamera}
        activeOpacity={0.5}
        style={styles.right}>
        <Image style={{width: '100%', height: '100%'}} source={source} />
      </TouchableOpacity>
    </View>
  );
};

export default PresonalDoc;

const styles = StyleSheet.create({
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btnUpload: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.while,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    height: 125,
    backgroundColor: Colors.while,
    borderRadius: 20,
    backgroundColor: Colors.while,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
  right: {
    width: '40%',
    height: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
