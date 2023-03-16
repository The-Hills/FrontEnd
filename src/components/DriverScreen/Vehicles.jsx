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
import React, {useState, useEffect} from 'react';
import {useVehicale} from '../../hooks/booking/useBooking';
import {Colors} from '../../../assets/theme/colors';
import Loader from '../loader/Loader';
import Error from '../../screens/Intro/Error';
import VehicleType from '../booking/Vehicle';
import useRQGlobalState from '../../States/useRQGlobalStates';

const Vehicles = ({distance, time}) => {
  const {isFetching, isError, data} = useVehicale();
  const [type, setType] = useRQGlobalState('type', 0);
  const [selectedVehicle, setSelectedVehicle] = useState(0);

  useEffect(() => {
    setType(selectedVehicle);
  }, [selectedVehicle]);

  if (isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }
  const VehicleData = data.data;
  const isSelectedVehicle = id => {
    return id === selectedVehicle;
  };

  const check = index => {
    setSelectedVehicle(index);
  };

  return (
    <View>
      {VehicleData.map((item, index) => (
        <VehicleType
          onPress={() => check(index)}
          key={index}
          name={item.name}
          price={item.price}
          distance={distance}
          time ={time}
          style={isSelectedVehicle(index) && styles.activeVehicle}
        />
      ))}
    </View>
  );
};

export default Vehicles;

const styles = StyleSheet.create({
  activeVehicle: {
    borderBottomColor: Colors.main,
    borderBottomWidth: 1.5,
  },
});
