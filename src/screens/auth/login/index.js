import React from 'react';
import {StyleSheet, Text, View, Image, TextInput,PreviewLayout} from 'react-native';
import Button from '../../../components/general/Button';
import Input from '../../../components/general/Input';
import LogoPkid from '../../../components/general/LogoPkid';
import {Colors} from '../../../../assets/theme/colors';
import { Sizes } from '../../../../assets/theme/fontSize';
import { FontFamily } from '../../../../assets/theme/fontFamily';

const Login = (props) => {
  return (
    <>
      <View style={styles.ContainerRegister}>
        <LogoPkid style={{ height: 80}}></LogoPkid>
        <View style={styles.FormRegister}>
          <View style={styles.content}>
            <Text style={styles.titleText}></Text>
            <Input lable="Phone" placeholder="Phone"></Input>
            <View style={styles.cardInput}>
              <Input lable="Password" placeholder="Password" password={true}></Input>
              <Text style={styles.forgotPass}>Forgot Password</Text>
            </View>
          </View>
          <Button
            lable="Sign up"
            style={styles.buttonSignUp}
            type="secondary"></Button>
          <Button lable="Sign in" style={styles.buttonSignIn}></Button>
          <View>
            <Text style={styles.text}>Or Sign up with</Text>

            <View style={styles.linkSignUp}>
                  <Image source={require('../../../../assets/images/Group12.png')} style={{width: 60, height: 60,textAlign:"center"}} />
                  <Image source={require('../../../../assets/images/Group11.png')} style={{width: 60, height: 60,textAlign:"center"}}/>
                  <Image source={require('../../../../assets/images/Group13.png')} style={{width: 60, height: 60,textAlign:"center"}}/>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  ContainerRegister: {
    backgroundColor: Colors.main,
    flex: 1,
  },
  FormRegister: {
    backgroundColor: Colors.while,
    top: 50,
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  content: {
    margin: 25,
  },
  forgotPass: {
    textAlign: 'right',
    color:Colors.red,
    fontSize:Sizes.text,
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
  },
  text: {
    textAlign: 'center',
    alignItems:'center',
    fontSize:Sizes.text,
    fontFamily:FontFamily.SemiBold,
   
  },
  linkSignUp:{
    flexDirection: "row",
  // textAlign:'center',
  // alignItems:'center',
    top:20,

  },

});
