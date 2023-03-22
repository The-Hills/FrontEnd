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
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Width} from '../../../assets/ScreenDimensions';
import VehicleType from './Vehicle';
import Button from '../general/Button';
import useRQGlobalState from '../../States/useRQGlobalStates';

const Confirm = ({
  style,
  pickLoation,
  dropOff,
  time,
  vehicleType,
  findDriver,
  payment,
  distance,
}) => {
  const [type] = useRQGlobalState('type', 0);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const payments = [
    {
      name: 'Cash',
      img: require('../../../assets/images/cashPay.png'),
      title: 'Cash payment',
    },
    {
      name: 'VNPAY',
      img: require('../../../assets/images/vnpay.png'),
      title: 'Pay with VNPAY',
    },
  ];

  const isSelectedPayment = id => {
    return id === selectedPayment;
  };
  const check = index => {
    setSelectedPayment(index);
  };
  return (
    <View style={[{width: '100%'}, style]}>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          backgroundColor: Colors.while,
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 2,
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
          }}>
          <View style={{flex: 1}}>
            <Icon name="map-pin" size={24} color="#34A853" />
          </View>
          <View
            style={{
              flex: 8,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontFamily: FontFamily.Light,
                fontSize: 11,
              }}>
              Pickup Location
            </Text>
            <Text
              numberOfLines={1}
              style={{
                lineHeight: 40,
                overflow: 'hidden',
                color: Colors.black,
                fontFamily: FontFamily.Medium,
                fontSize: 15,
                borderBottomWidth: 0.5,
                borderStyle: 'dashed',
              }}>
              {pickLoation}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
          }}>
          <View style={{flex: 1}}>
            <Icon name="send" size={24} color="#EA4335" />
          </View>
          <View
            style={{
              flex: 8,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontFamily: FontFamily.Light,
                fontSize: 11,
              }}>
              Drop off
            </Text>
            <Text
              numberOfLines={1}
              style={{
                lineHeight: 40,
                overflow: 'hidden',
                color: Colors.black,
                fontFamily: FontFamily.Medium,
                fontSize: 15,
              }}>
              {dropOff}
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 20}}>
        <VehicleType
          name={vehicleType}
          distance={distance}
          time={time}
          price={type !== 0 ? 10000 : 5000}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        {payments.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={payment}
            onPressIn={() => {
              console.log(index);
              console.log('hahaha');
              check(index);
            }}
            style={[
              styles.payments,
              styles.shadow,
              isSelectedPayment(index) && styles.choose,
            ]}>
            <Text
              style={{
                color: Colors.black,
                fontFamily: FontFamily.Medium,
                fontSize: 15,
              }}>
              {item.title}
            </Text>
            <Image style={{width: 70, height: 70}} source={item.img} />
          </TouchableOpacity>
        ))}
      </View>
      <Button onPress={findDriver} lable="Find driver" />
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  payments: {
    width: '48%',
    display: 'flex',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.while,
  },
  shadow: {
    borderRadius: 10,
    backgroundColor: Colors.while,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
  choose: {
    borderColor: Colors.main,
  },
});
