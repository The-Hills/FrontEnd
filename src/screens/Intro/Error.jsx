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
import {GeneralStyle} from '../../styles/generalStyles';
import Button from '../../components/general/Button';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';

const Error = () => {
  return (
    <View style={GeneralStyle.container}>
      <View
        style={{
          width: 250,
          height: 250,
          flex: 1,
          marginTop: '30%',
          marginBottom: 20,
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../../assets/images/error2.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: Colors.black,
            fontFamily: FontFamily.Bold,
            fontSize: 25,
            textAlign: 'center',
          }}>
          Oh no!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.black,
            fontFamily: FontFamily.Medium,
            fontSize: 15,
            width: 200,
          }}>
          Something went wrong, Please try again.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Button lable="Try again" />
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
