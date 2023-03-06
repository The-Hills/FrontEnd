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
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Modalize} from 'react-native-modalize';
import {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {PLACES_API_KEY} from '../../../assets/APIKey';
import Avatar from '../../components/general/Avatar';
import {Colors} from '../../../assets/theme/colors';
import LocationBox from '../../components/general/LocationBox';
import Button from '../../components/general/Button';
import Back from '../../components/general/Back';
import {FontFamily} from '../../../assets/theme/fontFamily';
import React, {Children, useEffect, useRef, useState} from 'react';
import MapComponent from '../../components/map/MapComponent';

const MapScreenDriver = () => {
  return (
    <View>
      <Text>MapScreenDriver</Text>
    </View>
  );
};

export default MapScreenDriver;

const styles = StyleSheet.create({});
