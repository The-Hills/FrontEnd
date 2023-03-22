import {Keyboard, StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {GeneralStyle} from '../../../styles/generalStyles';
import {Colors} from '../../../../assets/theme/colors';
import LogoPkid from '../../../components/general/LogoPkid';
import {Height, Width} from '../../../../assets/ScreenDimensions';
import Title from '../../../components/auth/Title';
import Input from '../../../components/general/Input';
import Button from '../../../components/general/Button';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Sizes} from '../../../../assets/theme/fontSize';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../../../hooks/auth/AuthContext';
import Loader from '../../../components/loader/Loader';
import useRQGlobalState from '../../../States/useRQGlobalStates';

const Register = ({navigation}) => {
  const [inputs, setInputs] = useRQGlobalState('PersonalDocs', {
    email: null,
    name: null,
    password: null,
    phone: null,
    vehicleName: 'Winner',
    vehicleColor: 'Black',
    vehicleType: 'motorbike',
    vehicleLicensePlates: '1554-553535',
    driverLicense: null,
    vehicleImage: null,
    cardId: null,
    avatar: null,
  });
  const [errors, setErrors] = React.useState({});
  const {isLoading, register} = useContext(AuthContext);
  const [role] = useRQGlobalState('role', null);
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.name) {
      handleError('Please input name', 'name');
      isValid = false;
    } else if (!inputs.name.match(/^[A-Za-z ]+$/)) {
      handleError('Full name is string', 'FullName');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (
      !inputs.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/,
      )
    ) {
      handleError(
        'Use 8 or more characters with a mix of letters, numbers & symbol',
        'password',
      );
      isValid = false;
    }
    if ((isValid = true)) {
      const res = await register(inputs);
      if (res?.data?.message === 'Successfully') {
        navigation.navigate('Login');
      }
    }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <KeyboardAwareScrollView>
      <Loader visible={isLoading} />
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
              onChangeText={text => handleOnchange(text, 'name')}
              onFocus={() => handleError(null, 'name')}
              lable="Full name"
              placeholder="Enter your name"
              error={errors.name}
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
          <Input
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            keyboardType="numeric"
            lable="Phone"
            placeholder="Enter your phone numbber"
            error={errors.phone}
          />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            {role !== 'driver' ? (
              <Button lable="Register" onPress={validate} />
            ) : (
              <Button
                lable="Next"
                onPress={() => navigation.navigate('PersonalDocs')}/>
            )}
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
