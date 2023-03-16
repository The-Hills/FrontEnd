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
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Width} from '../../../assets/ScreenDimensions';
import useRQGlobalState from '../../States/useRQGlobalStates';

const VehicleType = ({name, time, price, onPress, style, distance}) => {
  const [feeMoto, setFeeMoto] = useRQGlobalState('feeMoto', 0);
  const [feeCar, setFeeCar] = useRQGlobalState('feeCar', 0);
  const [Moto, setMoto] = useState(0);
  const [Car, setCar] = useState(0);

  useEffect(() => {
    setFeeCar(Car);
  }, [Car]);
  useEffect(() => {
    setFeeMoto(Moto);
  }, [Moto]);
  useEffect(() => {
    if (distance <= 2) {
      if (name === 'Car') {
        setFee(15000);
      } else {
        setFee(10000);
      }
    } else {
      if (name === 'Car') {
        setCar(Math.floor((15000 + price * (distance - 2)) / 1000) * 1000);
      } else {
        setMoto(Math.floor((10000 + price * (distance - 2)) / 1000) * 1000);
      }
    }
  }, []);
  // console.log('feee:', feeCar);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.left}>
        {name == 'Car' ? (
          <Image
            style={styles.img}
            source={require('../../../assets/images/car.png')}
          />
        ) : (
          <Image
            style={styles.img}
            source={require('../../../assets/images/moto.png')}
          />
        )}
        <Text style={styles.VehicleName}>{name}</Text>
      </View>
      <View>
        <Text style={styles.VehicleName}>
          {name === 'Car'
            ? feeCar.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })
            : feeMoto.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })}
        </Text>
        <Text
          style={{
            color: Colors.black,
            fontSize: 12,
            fontFamily: FontFamily.Light,
          }}>
          {time} - {time + 2} min
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VehicleType;

const styles = StyleSheet.create({
  container: {
    width: Width - 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.black,
    borderBottomWidth: 0.5,
    height: 80,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  img: {
    width: 80,
    height: 80,
  },
  VehicleName: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: FontFamily.Medium,
  },
});
