import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/theme/colors';
import Button from '../../components/general/Button';
import {GeneralStyle} from '../../styles/generalStyles';
import StatusBarAr from '../../../assets/theme/StatusBar';

const Onboarnding3 = ({navigation}) => {
  return (
    <View style={GeneralStyle.container}>
      <StatusBarAr bg={Colors.while} />
      <View style={styles.aaa}>
        <View style={styles.img}>
          <Image
            style={[GeneralStyle.img]}
            source={require('../../../assets/images/image11.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, GeneralStyle.title]}>
          Children's safety comes first
          </Text>
          <Text style={[styles.text, GeneralStyle.text]}>
          Make sure your child is safe during pick up.
          </Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button
          lable="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 img: {
    width: 353.86,
    height: 333,
    bottom:20,
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
    paddingHorizontal: 70,
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom:-20,
  },
});
export default Onboarnding3;
