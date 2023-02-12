import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogoPkid from '../../components/general/LogoPkid';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';
import {Height, Width} from '../../../assets/ScreenDimensions';
import Button from '../../components/general/Button';
import StatusBarAr from '../../../assets/theme/StatusBar';
import Title from '../../components/auth/Title';

const RegisterDriverScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Onboarnding');
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBarAr bg={Colors.main}/>
      <LogoPkid
        style={{
          width: 290,
          height: 65,
        }}
      />
      <View style={styles.content}>
        <Title Title="Register to become Pikid's driver"></Title>
        <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Button lable="Register" onPress={() => navigation.navigate('Register')}/>
        </View>
      </View>
    </View>
  );
};

export default RegisterDriverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BB7D6',
  },
  content: {
    paddingHorizontal:18,    
    paddingTop: 20,
    width: 353,
    height: 224,
    backgroundColor: Colors.while,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30
  },
  outstand: {
    color: Colors.black,
  },
});
