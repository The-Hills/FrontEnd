import React, {useEffect, useRef, useState} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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
import {customStyle} from '../../styles/generalStyles/mapStyle';
import MapViewDirections from 'react-native-maps-directions';
import {PLACES_API_KEY} from '../../../assets/APIKey';

const LVLocation = {
  latitude: 16.061362,
  longitude: 108.222391,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default React.forwardRef((props, mapRef) => {
  // const origin = {latitude: 16.0596459, longitude: 108.2397195};
  // const destination = {latitude: 16.0713037, longitude: 108.2155362};
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  console.log("mapRef: ", mapRef);
  const currentLocationRef = useRef(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);
  useEffect(() => {
    const region = {
      ...currentLocation,
      latitudeDelta: 0.0123,
      longitudeDelta: 0.01,
    };
    mapRef?.current?.animateToRegion(region, 1000);
  }, [currentLocation]);
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={customStyle}> 
          {props.children}
        {/* <Marker coordinate={LVLocation}>
          <Image
            source={require('../../../assets/images/piker.png')}
            style={{height: 80, width: 40, resizeMode: 'contain'}}></Image>
          <Callout>
            <Text>Nguyễn Tăng Bảo Ngọc</Text>
          </Callout>
        </Marker>
        <Marker coordinate={origin}>
          <Image
            source={require('../../../assets/images/school.png')}
            style={{height: 100, width: 50, resizeMode: 'contain'}}></Image>
          <Callout>
            <Text>Nguyễn Tăng Bảo Ngọc</Text>
          </Callout>
        </Marker> */}
        {/* <MapViewDirections
          origin={origin}
          destination={LVLocation}
          apikey={PLACES_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        /> */}
      </MapView>
    </View>
  );
}) 

//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
