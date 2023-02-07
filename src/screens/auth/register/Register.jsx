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
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Register = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setTimeout(() => {
      try {
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('Login');
      } catch (error) {
        alert('Error', 'Something went wrong');
      }
    }, 2000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
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
          <Title Title="Register" text="Register to Continue" />
          <View style={styles.form}>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              lable="Email"
              placeholder="user@gmail.com"
              error={errors.email}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'fullname')}
              onFocus={() => handleError(null, 'fullname')}
              lable="Full name"
              placeholder="Enter your name"
              error={errors.fullname}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'phone')}
              onFocus={() => handleError(null, 'phone')}
              keyboardType="numeric"
              lable="Phone number"
              placeholder="Enter your phone numbber"
              error={errors.phone}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              lable="Password"
              placeholder="************"
              password
              error={errors.password}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Button lable="Register" onPress={validate} />
            <Text
              onPress={() => navigation.navigate('Login')}
              style={[styles.text]}>
              Already have account? Sign In
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
