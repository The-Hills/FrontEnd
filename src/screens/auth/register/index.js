import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LogoPkid from '../../../components/general/LogoPkid';
import {Colors} from '../../../../assets/theme/colors';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Sizes} from '../../../../assets/theme/fontSize';
import Input from '../../../components/general/Input';
import Button from '../../../components/general/Button';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LogoPkid
        style={{
          width: 290,
          height: 65,
          top: 0,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.text}>Sign up to continue</Text>
        <View style={styles.formSignUp}>
          <Input lable='Email'/> 
          <Input lable='Password' password/>
          <Input lable='Full name'/>
          <Input lable='Phone number'/>
        </View>
        <View style={styles.btn}>
        <Button lable="Sign up" onPress={() => navigation.navigate('SplashSceen')} />
      </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BB7D6',
  },
  content: {
    backgroundColor: Colors.while,
    width: 414,
    height: 707,
    left: 0,
    top: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontFamily: FontFamily.Bold,
    color: Colors.black,
    size: Sizes.title,
    alignItems: 'center',
    lineHeight: 38,
    left: 30,
    top: 10,
    height: 40,
    width: 130,
  },
  text: {
    width: 177,
    height: 24,
    left: 30,
    top: 10,
    fontFamily: FontFamily.Medium,
    size: Sizes.text,
    lineHeight: 24,
    alignItems: 'center',
  },
  formSignUp: {
    top: 20,
    paddingHorizontal: 24,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outstand: {
    color: Colors.black,
  },
});
