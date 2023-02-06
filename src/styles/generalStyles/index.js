import {StyleSheet, Text, View} from 'react-native';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';

export const GeneralStyle = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.while
  },
  title: {
    fontFamily: FontFamily.Bold,
    fontSize: Sizes.title,
    color: Colors.black,
    // lineHeight: 30,
  },
  text: {
    fontFamily: FontFamily.Regular,
    fontSize: Sizes.text,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
