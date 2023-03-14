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
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';

const Header = ({lable, show = false, onPress}) => {
  return (
    <View style={[styles.container, show && styles.check]}>
      {show && (
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#232323',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}>
          <Icon name="chevron-left" size={24} color={Colors.black} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{lable}</Text>
      {show && (
        <View
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Icon name="more-vertical" color={Colors.black} size={24} />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FontFamily.Medium,
    color: Colors.main,
    fontSize: 20,
  },
});
