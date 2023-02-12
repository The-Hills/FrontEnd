import {Keyboard, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {GeneralStyle} from '../../../styles/generalStyles';
import {Colors} from '../../../../assets/theme/colors';
import LogoPkid from '../../../components/general/LogoPkid';
import {Height, Width} from '../../../../assets/ScreenDimensions';
import Title from '../../../components/auth/Title';
import Input from '../../../components/general/Input';
import Button from '../../../components/general/Button';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Sizes} from '../../../../assets/theme/fontSize';
// import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = ({navigation}) => {
  return (
    <KeyboardAwareScrollView extraScrollHeight={Height} enableOnAndroid>
      <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
      <View style={[GeneralStyle.container, styles.container]}>
        <View style={styles.header}>
          <LogoPkid
            style={{
              width: 290,
              height: 65,
            }}
          />
        </View>
        <View style={styles.content}>
          <Title Title="Register" text="Sign up to Continue" />
          <View style={styles.form}>
            <Input
              lable="Email"
              placeholder="user@gmail.com"
              error="dasdasdasd"
            />
            <Input
              lable="Password"
              placeholder="************"
              password
              error="dasdasdasd"
            />
            <Input
              lable="Full name"
              placeholder="Enter your name"
              error="dasdasdasd"
            />
            <Input
              keyboardType="numeric"
              lable="Phone number"
              placeholder="Enter your phone numbber"
              error="dasdasdasd"
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Button lable="Register" />
            <Text
              onPress={() => navigation.navigate('Login')}
              style={[styles.text]}>
              Already have account? Login
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main,
    height: Height,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
    // marginTop: 40
  },
  content: {
    flex: 5,
    paddingHorizontal: 30,
    paddingTop: 20,
    width: Width,
    // height: 700,
    backgroundColor: Colors.while,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  form: {
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    color: Colors.black,
    fontFamily: FontFamily.Medium,
    fontSize: Sizes.text,
  },
});
