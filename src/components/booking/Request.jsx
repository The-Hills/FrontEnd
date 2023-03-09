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
import AvatarandName from '../DriverScreen/Avatar';
import {FontFamily} from '../../../assets/theme/fontFamily';
import Avatar from '../general/Avatar';
import LocationInput from '../DriverScreen/LocationInput';

const Request = ({name, avatar}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <AvatarandName source={{uri: `${avatar}`}} name={name} />
        <View>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.SemiBold,
              fontSize: 13,
              textAlign: 'right',
            }}>
            VND 45.000
          </Text>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Light,
              fontSize: 13,
              textAlign: 'right',
            }}>
            3km
          </Text>
        </View>
      </View>
      <View style={{display: 'flex', gap: 20, marginVertical: 20}}>
        <LocationInput
          name="map-pin"
          location="101b Le Huu Trac Son Tra TP.Da Nang"
        />
        <LocationInput name="send" location="99To Hien Thanh, Da Nang" />
      </View>
      <View>
        <View style={{height: 60, flexDirection: 'row', gap: 10}}>
          <Avatar
            source={{
              uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png?f=webp',
            }}
            style={{
              borderWidth: 0.5,
              width: 50,
              height: 50,
            }}
          />
          <View
            style={{
              height: '100%',
              flexDirection: 'column',
              gap: 3,
            }}>
            <Image
              style={{
                borderWidth: 0.5,
                width: 35,
                height: 35,
              }}
              source={require('../../../assets/images/image13.png')}
            />
            <Text style={{color: Colors.black}}>ID: 1999248</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
