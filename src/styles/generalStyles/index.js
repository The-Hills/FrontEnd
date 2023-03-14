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
    backgroundColor: Colors.while,
  },
  title: {
    fontFamily: FontFamily.Bold,
    fontSize: Sizes.title,
    color: Colors.black,
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
  shadow: {

    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
});
