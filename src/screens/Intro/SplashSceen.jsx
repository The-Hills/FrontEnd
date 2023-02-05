import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogoPkid from '../../components/general/LogoPkid';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';

const SplashSceen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Onboarnding');
  }, 3000);
  return (
    <View style={styles.container}>
      <LogoPkid
        style={{
          width: 290,
          height: 65,
        }}
      />
      <Text style={styles.title}>
        Your Expectations are Our <Text style={styles.outstand}>Goals</Text>
      </Text>
    </View>
  );
};

export default SplashSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BB7D6',
  },
  title: {
    marginTop: 10,
    fontFamily: FontFamily.SemiBold,
    fontSize: Sizes.text,
  },
  outstand: {
    color: Colors.black,
  },
});
