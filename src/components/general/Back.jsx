import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const TYPES = ['primary'];
const SIZES = ['small'];

const Back = ({onPress, style}) => {
  const btnStyle = {
    height: 39,
    width: 39,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#232323',
    top: 20,
    right: '55%'
  };
  
  return (
    <TouchableOpacity
      style={[btnStyle, style]}
      activeOpacity={0.8}
      onPress={onPress}>
        <Icon name='chevron-left' size={20} color="#232323"/>
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  text: {},
});
