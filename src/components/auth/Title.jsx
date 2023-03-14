import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';

const Title = ({Title, text}) => {
  return (
    <View>
      <Text style={GeneralStyle.title}>{Title}</Text>
      <Text style={[styles.text]}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontFamily: FontFamily.Medium,
    fontSize: Sizes.text,
    lineHeight: 20,
  },
});
