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
  usecompletedBooking,
} from '../../hooks/booking/useBooking';
import {getUIdAsync} from '../../utils/StorageUtils';
import Loader from '../../components/loader/Loader';
import useRQGlobalState from '../../States/useRQGlobalStates';
import ModalContentStartPick from '../../components/DriverScreen/ModalContentStartPick';
import {useQuery} from '@tanstack/react-query';
import {getBooking} from '../../API/booking.api';

const MapScreenDriver = ({navigation, route, navigation: {goBack}}) => {
  const {item} = route.params;
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(0);
  const [shouldShow, setShouldShow] = useState(1);
  const [kidID, setKidID] = useRQGlobalState('kidID', null);
  const [status, setStatus] = useRQGlobalState('status', '');
  const [bookingID, setBookingID] = useRQGlobalState('bookingID', null);
  const [currentLocation] = useRQGlobalState('location', {
    latitude: 0,
    longitude: 0,
  });
  const {data, isLoading, isError} = useQuery({
    queryKey: ['bookingDetail'],
    queryFn: () => getBooking(item.id),
  });
  // console.log('item', kidID);
  if (isLoading) {
    console.log('loading');
  }
  if (isError) {
    console.log('error');
  }

  useEffect(() => {
    setKidID(item.kid.id);
    setBookingID(item.id);
  }, []);
  // console.log('dayy', data?.data?.data);
  // if (!data) return;
  const BookingData = data?.data?.data;
  // console.log('data', BookingData);
  const mapRef = useRef(null);

  const modalizeRef = useRef(null);
  const onOpen = async () => {
    modalizeRef.current?.open('top');
  };
  useEffect(() => {
    if (BookingData?.status === 'onWayPickUp') {
      setShouldShow(2);
    }
    if (BookingData?.status === 'onRide') {
      setStatus('onRide');
    }
  });
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

  useEffect(() => {
    const startPosition = extractLatLng(item.startPosition);
    const endPosition = extractLatLng(item.endPosition);
    if (startPosition) {
      setOrigin({
        latitude: startPosition.lat,
        longitude: startPosition.lng,
      });
    }
    if (endPosition) {
      setDestination({
        latitude: endPosition.lat,
        longitude: endPosition.lng,
      });
    }
  }, []);
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

  const useMutateAcceptBooking = useAcceptBooking();
  const Accept = async () => {
    const id = await getUIdAsync();
    useMutateAcceptBooking.mutate({
      id: item.id,
      data: {
        driverId: id,
      },
    });
  };

  const useMutateCompletedBooking = usecompletedBooking();
  const Completed = async () => {
    useMutateCompletedBooking.mutate({
      id: item.id,
      data: {
        status: 'completed',
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapComponent ref={mapRef}>
          <Marker identifier="origin" coordinate={origin}>
            <Image
              source={require('../../../assets/images/piker.png')}
              style={{height: 80, width: 40, resizeMode: 'contain'}}></Image>
          </Marker>
          {/* {currentLocation !== null ? (
            <Marker identifier="origin" coordinate={currentLocation}>
              <Image
                source={require('../../../assets/images/drivermarker.png')}
                style={{height: 80, width: 40, resizeMode: 'contain'}}></Image>
            </Marker>
          ) : null} */}
          <Marker identifier="destination" coordinate={destination} />
          <MapViewDirections
            origin={
              BookingData?.status === 'onWayPickUp' ? currentLocation : origin
            }
            destination={
              BookingData?.status === 'onWayPickUp'
                ? currentLocation
                : destination
            }
            apikey={PLACES_API_KEY}
            strokeWidth={5}
            strokeColor="hotpink"
            onReady={result => {
              setDistance(result.distance);
            }}
          />
          {/* {BookingData?.status === 'onWayPickUp' ? (
            <MapViewDirections
              origin={currentLocation}
              destination={origin}
              apikey={PLACES_API_KEY}
              strokeWidth={5}
              strokeColor="red"
            />
          ) : null} */}
        </MapComponent>
        <Back style={styles.back} onPress={() => goBack()} />
      </View>
      <Modalize
        disableScrollIfPossible={true}
        keyboardAvoidingOffset={300}
        alwaysOpen={420}
        adjustToContentHeight={true}
        withOverlay={false}
        ref={modalizeRef}>
        {useMutateAcceptBooking.isLoading && <Loader />}
        {shouldShow == 1 ? (
          <View style={[styles.BottomContainer, {height: 420}]}>
            <Request
              startLocation={item.startLocation}
              endLocation={item.endLocation}
              distance={item.distance}
              fee={item.fee}
              kidName={item.kid.name}
              qr={item.kid.qr}
              kidAvatar={item.kid.avatar}
              avatar={item.kid.parent.avatar}
              name={item.kid.parent.name}
            />
            <Button
              onPress={() => {
                Accept();
              }}
              style={[styles.btn]}
              lable="Accept"
            />
          </View>
        ) : shouldShow == 2 ? (
          <View style={[styles.BottomContainer, {height: 360}]}>
            <ModalContentStartPick
              startLocation={item.startLocation}
              endLocation={item.endLocation}
              distance={item.distance}
              fee={item.fee}
              kidName={item.kid.name}
              qr={item.kid.qr}
              kidAvatar={item.kid.avatar}
              avatar={item.kid.parent.avatar}
              name={item.kid.parent.name}
            />
            {BookingData?.status === 'onWayPickUp' ? (
              <Button
                lable="Scan"
                onPress={() => navigation.navigate('Scan')}
              />
            ) : BookingData?.status === 'onRide' ? (
              <Button
                lable="Completed"
                onPress={() => {
                  Completed();
                  navigation.navigate('Completed');
                }}
              />
            ) : null}
          </View>
        ) : shouldShow == 3 ? (
          <View style={[styles.BottomContainer, {height: 'auto'}]}>
            <Confirm
              pickLoation={pickDetail.formatted_address}
              dropOff={dropDetail.formatted_address}
            />
          </View>
        ) : null}
      </Modalize>
    </View>
  );
};

export default MapScreenDriver;

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
