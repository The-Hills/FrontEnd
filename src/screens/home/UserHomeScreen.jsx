import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';

const UserHomeScreen = () => {
  return (
    <View style={GeneralStyle.container}>
      <Text style={[GeneralStyle.text, styles.text]}>UserHomeScreen</Text>
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});
