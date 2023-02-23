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
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../../../assets/theme/colors';
import {Width} from '../../../assets/ScreenDimensions';
import {GeneralStyle} from '../../styles/generalStyles';
import {FontFamily} from '../../../assets/theme/fontFamily';
const TYPES = ['base', 'none'];
const LocationBox = ({
  style,
  iconName,
  onPress,
  type,
  onChangeText,
  lable,
  value,
  placeholder,
  iconSend,
  onFocus = () => {},
  ...props
}) => {
  const boxType = TYPES.includes(type) ? type : 'base';
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: boxType === 'base' ? Colors.blue2 : Colors.while},
        style,
      ]}>
      <View style={styles.icon}>
        <Icon name={iconName} size={24} color={Colors.black} />
      </View>
      <TextInput
        style={[styles.input]}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.black}
        placeholder={placeholder}
        {...props}
      />
      <Icon name={iconSend} size={24} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default LocationBox;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: Colors.blue2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
  icon: {
    // flexGrow: 1,
  },
  input: {
    height: '100%',
    color: Colors.black,
    fontSize: 15,
    marginLeft: 5,
    flex: 2,
    // width: '100%',
    fontFamily: FontFamily.Medium,
  },
});
