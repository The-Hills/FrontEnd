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
import React, {useEffect} from 'react';
import AvatarandName from './Avatar';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {useDriverQuery, useUpdateDriver} from '../../hooks/useUser';
import Geolocation from '@react-native-community/geolocation';
import useRQGlobalState from '../../States/useRQGlobalStates';

const Header = ({avatar, name, active}) => {
  const useShareCurrentLocation = useUpdateDriver();
  const [currentLocation, setCurrentLocation] = useRQGlobalState('location', {
    latitude: 0,
    longitude: 0,
  });
  const {data} = useDriverQuery();
  const DriverData = data.data.data;
  // console.log(DriverData); 
  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    useShareCurrentLocation.mutate({
      id: DriverData.id,
      currentLocation: currentLocation,
    });
  }, [currentLocation]);
  return (
    <View>
      <AvatarandName
        source={{
          uri: DriverData.avatar,
        }}
        name={DriverData.name}
        active={DriverData.status}
      />
      <View
        style={{
          backgroundColor: Colors.blue2,
          height: 85,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: 25,
        }}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../../../assets/images/vi2.png')}
        />
        <View>
          <Text style={styles.text}>VND</Text>
          <Text style={styles.text}>450.000</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontFamily: FontFamily.Bold,
    fontSize: 20,
    textAlign: 'right',
  },
});
