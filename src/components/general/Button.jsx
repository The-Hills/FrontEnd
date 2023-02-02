import React from 'react';
import {ButtonColors} from '../../../assets/theme/ButtonColor';
import {ButtonSizes} from '../../../assets/theme/ButtonSize';
import {Width} from '../../../assets/ScreenDimensions';
import {Height} from '../../../assets/ScreenDimensions';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const TYPES = ['primary', 'secondary', 'hollow'];
const SIZES = ['small', 'medium', 'large'];

const Button = ({onPress, type, lable, style, size}) => {
  const btnSize = SIZES.includes(size) ? size : 'large';
  const btnType = TYPES.includes(type) ? type : 'primary';
  const btnStyle = {
    height: 50,
    width:
      btnSize === 'large'
        ? ButtonSizes.large
        : btnSize === 'medium'
        ? ButtonSizes.medium
        : ButtonSizes.small,
    backgroundColor:
      btnType === 'secondary'
        ? ButtonColors.secondary
        : btnType === 'hollow'
        ? ButtonColors.hollow
        : ButtonColors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: btnType === 'hollow' ? 2 : 0,
    borderColor: '#FF7878',
  };
  const lableStyle = {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color:
      btnType === 'hollow'
        ? '#FF7878'
        : btnType === 'secondary'
        ? '#777171'
        : '#ffffff',
  };
  return (
    <TouchableOpacity
      style={[btnStyle, style]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={lableStyle}>{lable}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {},
});
