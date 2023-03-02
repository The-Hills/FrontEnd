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
import {Width} from '../../../assets/ScreenDimensions';

const VehicleType = ({name, price, onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress}  style={[styles.container,style]}>
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
        <Text style={styles.VehicleName}>20.000 VND</Text>
        <Text
          style={{
            color: Colors.black,
            fontSize: 12,
            fontFamily: FontFamily.Light,
          }}>
          5-7 min
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
