import {Keyboard, StyleSheet, Text, View, StatusBar, Alert} from 'react-native';
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
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../../hooks/auth/AuthContext';
import Loader from '../../../components/loader/Loader';
import useRQGlobalState from '../../../States/useRQGlobalStates';
const Login = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const {userInfo, isLoading, login, authUser} = useContext(AuthContext);
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
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login(inputs);
    }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  console.log('login', role);
  return (
    <KeyboardAwareScrollView extraScrollHeight={Height} enableOnAndroid>
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
          <Title Title="Sign In" text="Sign in to Continue" />
          <View style={styles.form}>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              lable="Email"
              placeholder="user@gmail.com"
              error={errors.email}
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
            <Button lable="Sign In" onPress={validate} />
            <Text
              onPress={() => navigation.navigate('Register')}
              style={[styles.text]}>
              Don't have account? Register
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
