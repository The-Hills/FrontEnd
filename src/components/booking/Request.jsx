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

const Request = ({
  name,
  avatar,
  startLocation,
  endLocation,
  distance,
  fee,
  kidName,
  qr,
  kidAvatar,
}) => {
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
        <AvatarandName
          showStatus={false}
          source={{uri: `${avatar}`}}
          name={name}
        />
        <View>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.SemiBold,
              fontSize: 13,
              textAlign: 'right',
            }}>
            VND {fee}
          </Text>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Light,
              fontSize: 13,
              textAlign: 'right',
            }}>
            {distance}km
          </Text>
        </View>
      </View>
      <View style={{display: 'flex', gap: 20, marginVertical: 20}}>
        <LocationInput name="map-pin" location={startLocation} />
        <LocationInput name="send" location={endLocation} />
      </View>
      <View>
        <View style={{height: 60, flexDirection: 'row', gap: 10}}>
          <Avatar
            source={{
              uri: kidAvatar,
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
              source={{uri: qr}}
            />
            <Text style={{color: Colors.black}}>Name: {kidName} </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
