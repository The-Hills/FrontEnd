import {Image, StyleSheet, Text, View} from 'react-native';
import {Width} from '../../../assets/ScreenDimensions';
import {Height} from '../../../assets/ScreenDimensions';
import React from 'react';

const LogoPkid = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/PikidLogo.png')}
      />
    </View>
  );
};

export default LogoPkid;

const styles = StyleSheet.create({
  container: {},
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
