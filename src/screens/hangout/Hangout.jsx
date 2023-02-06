import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';

const Hangout = () => {
  return (
    <View style={GeneralStyle.container}>
      <Text style={[GeneralStyle.text, styles.text]}>Hangout</Text>
    </View>
  );
};

export default Hangout;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});
