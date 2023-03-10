import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Width} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import StatusBarAr from '../../../assets/theme/StatusBar';
import Button from '../../components/general/Button';
import {GeneralStyle} from '../../styles/generalStyles';
const Onboarnding = ({navigation}) => {
  return (
    <View style={GeneralStyle.container}>
      <StatusBarAr bg={Colors.while} />
      <View style={styles.aaa}>
        <View style={styles.img}>
          <Image
            style={[GeneralStyle.img]}
            source={require('../../../assets/images/ob12.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, GeneralStyle.title]}>
            Find the driver your child
          </Text>
          <Text style={[styles.text, GeneralStyle.text]}>
            Solution for you, safe service for your child
          </Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button
          lable="Get Started"
          onPress={() => navigation.navigate('AccountRole')}
        />
      </View>
    </View>
  );
};

export default Onboarnding;

const styles = StyleSheet.create({
  img: {
    width: 353.86,
    height: 333,
  },
  aaa: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: Colors.black,
    paddingHorizontal: 60,
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
