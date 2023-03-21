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
import {FontFamily} from '../../../assets/theme/fontFamily';
import Icon from 'react-native-vector-icons/Feather';
import Avatar from '../general/Avatar';
import AvatarandName from './Avatar';
import LocationInput from './LocationInput';
import useRQGlobalState from '../../States/useRQGlobalStates';

const ModalContentStartPick = ({
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
  const [status, setStatus] = useRQGlobalState('status', '');
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
          <Icon name="phone-call" size={24} color={Colors.black} />
        </View>
      </View>
      <View style={{display: 'flex', marginVertical: 20}}>
        <Text
          style={{
            color: Colors.black,
            fontFamily: FontFamily.Medium,
            fontSize: 13,
            marginBottom: 5,
            paddingLeft: 5,
          }}>
          {status === 'onRide' ? `Drop location` : `Kid's location`}
        </Text>
        {status === 'onRide' ? (
          <LocationInput
            style={styles.check}
            name="send"
            location={endLocation}
          />
        ) : (
          <LocationInput
            style={styles.check2}
            name="map-pin"
            location={startLocation}
          />
        )}
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

export default ModalContentStartPick;

const styles = StyleSheet.create({
  check: {
    borderWidth: 1,
    borderColor: Colors.main,
  },
  check2: {
    borderWidth: 1,
    borderColor: Colors.red,
  },
});
