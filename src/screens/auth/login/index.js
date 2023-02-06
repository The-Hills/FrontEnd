import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Button from '../../../components/general/Button';
import Input from '../../../components/general/Input';
import LogoPkid from '../../../components/general/LogoPkid';

const Login = () => {
  return (
    <>
      <View style={styles.ContainerRegister}>
        {/* <LogoPkid></LogoPkid> */}

        <View style={styles.FormRegister}>
          <View style={styles.content}>
            <Text style={styles.titleText}>Hi, Welcome To</Text>
            <Input lable="Phone" value="Phone"></Input>
            <View style={styles.cardInput}>
              <Input lable="Password" value="Password"></Input>
              <Text style={styles.forgotPass}>Forgot Password</Text>
            </View>
          </View>

          <Button
            lable="Sign up"
            style={styles.buttonSignUp}
            type="hollow"></Button>
          <Button lable="Sign in" style={styles.buttonSignIn}></Button>

          <View style={styles.linkSignUp}>
            {/* <Text style={styles.line}></Text> */}
            <Text style={styles.text}>Or Sign up with</Text>
            {/* <Text style={styles.line}></Text> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  ContainerRegister: {
    backgroundColor: '#4BB7D6',
    flex: 1,
  },
  FormRegister: {
    backgroundColor: '#FFFFFF',
    color: 'red',
    top: 10,
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  content: {
    margin: 25,
  },
  titleText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },
  PhoneTile: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    top: 10,
  },
  PasswordTile: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    top: 10,
  },
  cardInput: {
    top: 20,
  },
  input: {
    fontFamily: 'Poppins',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginVertical: 1,
  },
  forgotPass: {
    top: 5,
    textAlign: 'right',
    color: 'red',
    bottom: 40,
  },
  buttonSignUp: {
    marginLeft: 25,
    marginRight: 25,
    top: 20,
  },
  buttonSignIn: {
    marginLeft: 25,
    marginRight: 25,
    top: 30,
    marginBottom: 60,
    // bottom:30,
  },
  linkSignUp: {
    // direction:
  },
  line: {
    width: 50,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    // verticalAlign:"bottom",
    textAlign: 'center',
  },
});
