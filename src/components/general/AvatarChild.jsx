import React from 'react';
import {Width} from '../../../assets/ScreenDimensions';
import {Height} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {Sizes} from '../../../assets/theme/fontSize';
import {FontFamily} from '../../../assets/theme/fontFamily';
const AvatarChilds = ({source, style,lable}) => {
  return (
    <View style={[styles.container,style]}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/Group49.png')}
        />
        <View style={styles.content}>
          <Image
            style={styles.qr}
            source={require('../../../assets/images/image12.png')}
          />
          <Text style={styles.text}>{lable}</Text>
        </View>
      </View>

      <View style={styles.light}></View>
    </View>
  );
};

export default AvatarChilds;

const styles = StyleSheet.create({
  container: {},
  card: {
    flexDirection: 'row',
  },
  img: {
    width: 80,
    height: '100%',
    resizeMode: 'contain',
  },
  qr: {
    height: 50,
    resizeMode: 'contain',
    textAlign: 'left',
    alignContent: 'flex-start',
    color: Colors.black,
  },
  content: {

    textAlign: 'left',
  },
  text: {
    fontFamily: FontFamily.Light,
    fontSize: Sizes.text,
    paddingLeft:20,
  },
  light: {
    width: Width,
    backgroundColor: '#4BB7D6',
    height: 1,
    marginTop: 10,
  },
});
