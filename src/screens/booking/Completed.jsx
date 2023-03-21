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
import {Colors} from '../../../assets/theme/colors';
import {Height, Width} from '../../../assets/ScreenDimensions';
import LogoPkid from '../../components/general/LogoPkid';
import Avatar from '../../components/general/Avatar';
import {FontFamily} from '../../../assets/theme/fontFamily';
import Button from '../../components/general/Button';

const Completed = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.main,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LogoPkid
        style={{
          width: 130,
          height: 50,
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      />
      <View
        style={{
          backgroundColor: Colors.while,
          width: Width - 40,
          height: 200,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            top: -60,
            left: Width / 3.5,
            right: Width / 3.5,
          }}>
          <Avatar
            style={{width: 120, height: 120, backgroundColor: Colors.red}}
            source={{
              uri: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-pessoa_23-2149436182.jpg?w=2000',
            }}
          />
        </View>
        <Text
          style={{
            color: Colors.black,
            fontFamily: FontFamily.SemiBold,
            fontSize: 25,
            paddingTop: 30,
          }}>
          Good Job
        </Text>
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Button
            size="medium"
            onPress={() => navigation.navigate('DriverBottomTabs')}
            lable="Leave"
          />
        </View>
      </View>
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({});
