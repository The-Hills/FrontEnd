import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';
import StatusBarAr from '../../../assets/theme/StatusBar';
import Avatar from '../../components/general/Avatar';
import Button from '../../components/general/Button';
import LogoPkid from '../../components/general/LogoPkid';
import {GeneralStyle} from '../../styles/generalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
const PointScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBarAr bg={Colors.main} />
      <View>
        <LogoPkid
          style={{
            width: 230,
            height: 50,
            top: -200,
            left: -90,
          }}
        />
      </View>

      <View style={styles.aaa}>
        <View style={styles.img}>
          <Image
            style={[GeneralStyle.img]}
            source={require('../../../assets/images/Group49.png')}
          />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={[styles.title]}>
              Lionel Ronado <Text>(</Text>{' '}
              <Icon name="star-half-outline" size={20} color="#FBBC04"></Icon>{' '}
              <Text>5)</Text>
            </Text>
            <Text style={[styles.text, GeneralStyle.text]}>ID: 11584669TL</Text>
            <View style={styles.star}>
              <Icon
                name="star-half-outline"
                style={styles.iconStar}
                size={30}
                color="#FBBC04"></Icon>
              <Icon
                name="star-half-outline"
                style={styles.iconStar}
                size={30}
                color="#FBBC04"></Icon>
              <Icon
                name="star-half-outline"
                style={styles.iconStar}
                size={30}
                color="#FBBC04"></Icon>
              <Icon
                name="star-half-outline"
                style={styles.iconStar}
                size={30}
                color="#FBBC04"></Icon>
              <Icon
                name="star-half-outline"
                style={styles.iconStar}
                size={30}
                color="#FBBC04"></Icon>
            </View>
            <Button style={styles.btn} lable="Submit" />
            {/* <Icon name=""></Icon> */}
          </View>
        </View>
      </View>
      {/* <View bg={Colors.while}></View> */}
    </View>
  );
};

export default PointScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.main,
  },

  logo: {
    width: 290,
    height: 60,
    right: 30,
  },
  aaa: {
    backgroundColor: Colors.while,
    borderRadius: 20,
    paddingBottom: 30,
    // paddingLeft: 40,
    // paddingRight: 40,
    width: 300,
  },
  content: {},
  img: {
    height: 100,
    resizeMode: 'contain',
    position: 'relative',
    top: -50,
  },
  title: {
    top: -40,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: FontFamily.Medium,
    color: Colors.black,
  },
  text: {
    bottom: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btn: {
    width: 250,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'yellow',
    bottom: 25,
  },
  iconStar: {
    width: 50,
  },
});
