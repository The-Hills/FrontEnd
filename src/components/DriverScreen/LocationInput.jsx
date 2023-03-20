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
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';

const LocationInput = ({location, name, style}) => {
  return (
    <View style={[style, styles.container]}>
      <Icon name={name} size={24} color={Colors.black} />
      <Text
        numberOfLines={1}
        style={{
          flex: 1,
          color: Colors.black,
          fontFamily: FontFamily.Regular,
          fontSize: 13,
          lineHeight: 50,
          margin: 0,
          padding: 0,
        }}>
        {location}
      </Text>
    </View>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.while,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    gap: 15,
    overflow: 'hidden',
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
