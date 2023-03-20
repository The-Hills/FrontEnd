import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Width, Height} from '../../../assets/ScreenDimensions';
import Button from '../../components/general/Button';

const Scan = () => {
  return (
    <QRCodeScanner
      cameraStyle={{width: Width, height: '100%'}}
      topViewStyle={{position: 'absolute'}}
      bottomViewStyle={{position: 'absolute', bottom: 50}}
      onRead={({data}) => {
        console.log(data);
      }}
      bottomContent={
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Image
            style={{width: 250, height: 250, marginBottom: 300}}
            source={require('../../../assets/images/scan.png')}
          />
          <Button lable="Scan" />
        </View>
      }
    />
  );
};

export default Scan;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
