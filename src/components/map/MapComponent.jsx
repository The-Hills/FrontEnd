import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
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
const customStyle = [
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#878787',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f9f5ed',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#aee0f4',
      },
    ],
  },
];
const LVLocation = {
  latitude: 16.061362,
  longitude: 108.222391,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function MapComponent() {
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        // zoomEnabled={true}
        // zoomControlEnabled={true}
        style={styles.map}
        customMapStyle={customStyle}
        //specify our coordinates.
        initialRegion={LVLocation}>
        <Marker coordinate={LVLocation}>
          <Image
            source={require('../../../assets/images/car2.png')}
            style={{height: 80, width: 40, resizeMode: 'contain'}}></Image>
        </Marker>
      </MapView>
    </View>
  );
}
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
