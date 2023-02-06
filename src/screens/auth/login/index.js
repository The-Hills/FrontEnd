import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Button from '../../../components/general/Button';

const Login = () => {
  return (
    <>
      <View style={styles.ContainerRegister}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
          }}
          style={{width: 200, height: 200}}></Image>

        <View style={styles.FormRegister}>
          <View style={styles.content}>
            <Text style={styles.titleText}>Hi, Welcome To</Text>

            <Text style={styles.PhoneTile}>Phone</Text>
            <TextInput
              // keyboardType="Phone"
              placeholder="Phone"
              placeholderTextColor="black"
              style={styles.input}
            />
            <View style={styles.cardInput}>
              <Text style={styles.PasswordTile}>Password</Text>
              <TextInput
                placeholder={'**********'}
                secureTextEntry={true}
                placeholderTextColor="black"
                style={styles.input}
              />
              <Text style={styles.forgotPass}>Forgot Password</Text>
            </View>
          </View>

          <Button
            lable="Sign up"
            style={styles.buttonSignUp}
            color="hollow"></Button>
          <Button lable="Sign in" style={styles.buttonSignIn}></Button>

          <View style={styles.linkSignUp}>
            <Text style={styles.line}></Text>
            <Text style={styles.text}>Or Sign up with</Text>
            <Text style={styles.line}></Text>
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
    marginBottom:60,
    // bottom:30,
  },
  linkSignUp:{
// direction:
  },
  line:{
   width:50,
   height:1,
   backgroundColor:"black"

  },
  text: {
    // verticalAlign:"bottom",
    textAlign: 'center'
  }
});
