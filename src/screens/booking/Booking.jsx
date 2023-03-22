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
import React, {Children, useEffect, useRef, useState} from 'react';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Modalize} from 'react-native-modalize';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import MapViewDirections from 'react-native-maps-directions';
import {PLACES_API_KEY} from '../../../assets/APIKey';
import Avatar from '../../components/general/Avatar';
import {Colors} from '../../../assets/theme/colors';
import LocationBox from '../../components/general/LocationBox';
import Button from '../../components/general/Button';
import Back from '../../components/general/Back';
import {FontFamily} from '../../../assets/theme/fontFamily';
import MapComponent from '../../components/map/MapComponent';
import Request from '../../components/booking/Request';
import {
  useAcceptBooking,
  useBookingDetail,
} from '../../hooks/booking/useBooking';
import {getUIdAsync} from '../../utils/StorageUtils';
import Loader from '../../components/loader/Loader';
import useRQGlobalState from '../../States/useRQGlobalStates';
import ModalContentStartPick from '../../components/DriverScreen/ModalContentStartPick';
import ContentModal from '../../components/booking/ContentModal';
import {getBooking} from '../../API/booking.api';
import {useQuery} from '@tanstack/react-query';

const Booking = ({navigation}) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(0);
  const [shouldShow, setShouldShow] = useState(2);
  const [bookiingID] = useRQGlobalState('id', null);

  const {data, isLoading, isError} = useQuery({
    queryKey: ['bookingDetail'],
    queryFn: () => getBooking(bookiingID),
  });
  const BookingData = data?.data?.data;
  const mapRef = useRef(null);

  const modalizeRef = useRef(null);
  const onOpen = async () => {
    modalizeRef.current?.open('top');
  };

  const extractLatLng = str => {
    const match = str.match(/\((.*?)\)/);
    if (match) {
      const numbers = match[1].split(' ');
      const lat = parseFloat(numbers[0]);
      const lng = parseFloat(numbers[1]);
      return {lat, lng};
    } else {
      return null;
    }
  };

  // useEffect(() => {
  //   const startPosition = extractLatLng(BookingData.startPosition);
  //   const endPosition = extractLatLng(BookingData.endPosition);
  //   if (startPosition) {
  //     setOrigin({
  //       latitude: startPosition.lat,
  //       longitude: startPosition.lng,
  //     });
  //   }
  //   if (endPosition) {
  //     setDestination({
  //       latitude: endPosition.lat,
  //       longitude: endPosition.lng,
  //     });
  //   }
  // }, []);
  useEffect(() => {
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        top: 50,
        right: 30,
        bottom: 1000,
        left: 30,
      },
      animated: true,
    });
  }, [distance]);
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapComponent ref={mapRef}>
          {/* <Marker identifier="origin" coordinate={origin}>
            <Image
              source={require('../../../assets/images/piker.png')}
              style={{height: 80, width: 40, resizeMode: 'contain'}}></Image>
          </Marker>
          <Marker identifier="destination" coordinate={destination} />
          <MapViewDirections
          
            origin={origin}
            destination={destination}
            apikey={PLACES_API_KEY}
            strokeWidth={5}
            strokeColor="hotpink"
            onReady={result => {
              setDistance(result.distance);
            }}
          /> */}
        </MapComponent>
        <Back
          style={styles.back}
          onPress={() => navigation.navigate('BottomTabs')}
        />
      </View>
      <Modalize
        disableScrollIfPossible={true}
        keyboardAvoidingOffset={300}
        alwaysOpen={420}
        adjustToContentHeight={true}
        withOverlay={false}
        ref={modalizeRef}>
        {/* {useMutateAcceptBooking.isLoading && <Loader />} */}
        {shouldShow == 1 ? (
          <View style={[styles.BottomContainer, {height: 250}]}>
            <Text
              style={{
                color: Colors.black,
                fontFamily: FontFamily.SemiBold,
                fontSize: 20,
              }}>
              Your Driver on the way
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: 20,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: Colors.main,
                  borderRadius: 360,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="phone-call" size={24} color={Colors.while} />
              </View>
              <Avatar
                style={{width: 100, height: 100, borderWidth: 1}}
                source={{
                  uri: 'https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png',
                }}
              />
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: Colors.main,
                  borderRadius: 360,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="message-circle" size={24} color={Colors.while} />
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: FontFamily.SemiBold,
                  fontSize: 15,
                }}>
                Ho Quoc Tri
              </Text>
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: FontFamily.SemiBold,
                  fontSize: 15,
                }}>
                (
              </Text>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assets/images/star.png')}
              />
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: FontFamily.SemiBold,
                  fontSize: 15,
                }}>
                5)
              </Text>
            </View>
          </View>
        ) : (
          <View style={[styles.BottomContainer, {height: 400}]}>
            <Image
              style={{width: 250, height: 250}}
              source={require('../../../assets/images/finddd.png')}
            />
            <Text
              style={{
                color: Colors.black,
                fontFamily: FontFamily.SemiBold,
                fontSize: 25,
              }}>
              Finding driver...
            </Text>
          </View>
        )}
      </Modalize>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  activeVehicle: {
    borderBottomColor: Colors.main,
    borderBottomWidth: 1.5,
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  modal: {
    backgroundColor: Colors.while,
    height: 250,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicles: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    // paddingHorizontal: 10,
    marginVertical: 15,
  },
  container: {
    width: Width,
    height: Height,
  },
  map: {
    height: Height,
    width: Width,
    backgroundColor: Colors.while,
  },
  input: {
    color: Colors.black,
  },
  BottomContainer: {
    // display:
    paddingVertical: 30,
    gap: 20,
    bottom: 0,
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  btn: {
    marginTop: 20,
    marginBottom: 30,
    // position: 'absolute',
    // bottom: 20,
  },
  back: {
    // position: 'absolute',
    left: 20,
    top: 20,
  },
  active: {
    borderColor: Colors.blue2,
    borderWidth: 3,
  },
});
