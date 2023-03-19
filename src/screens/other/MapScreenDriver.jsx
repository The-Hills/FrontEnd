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
import {useAcceptBooking} from '../../hooks/booking/useBooking';
import {getUIdAsync} from '../../utils/StorageUtils';
import Loader from '../../components/loader/Loader';
import useRQGlobalState from '../../States/useRQGlobalStates';

const MapScreenDriver = ({route, navigation: {goBack}}) => {
  const {item} = route.params;
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(0);
  const [shouldShow, setShouldShow] = useState(1);

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

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapComponent ref={mapRef}>
          <Marker identifier="origin" coordinate={origin}>
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
          />
        </MapComponent>
        <Back style={styles.back} onPress={() => goBack()} />
      </View>
      <Modalize
        disableScrollIfPossible={true}
        keyboardAvoidingOffset={300}
        alwaysOpen={450}
        adjustToContentHeight={true}
        withOverlay={false}
        ref={modalizeRef}>
        {useMutateAcceptBooking.isLoading && <Loader />}
        {shouldShow == 1 ? (
          <View style={[styles.BottomContainer, {height: 450}]}>
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
          <View style={[styles.BottomContainer, {height: 600}]}>
            <View style={{marginBottom: 20}}>
              {VehiclesType.map((item, index) => (
                <VehicleType
                  onPress={() => {
                    setSelectedVehicle(index);
                  }}
                  key={index}
                  name={item.name}
                  style={isSelectedVehicle(index) && styles.activeVehicle}
                />
              ))}
            </View>
            <Button onPress={() => CheckSellectVehicleTye()} lable="Next" />
          </View>
        ) : shouldShow == 3 ? (
          <View style={[styles.BottomContainer, {height: 500}]}>
            <Confirm
              pickLoation={pickDetail.formatted_address}
              dropOff={dropDetail.formatted_address}
            />
          </View>
        ) : null}
      </Modalize>
      {/* <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="right">
        <View style={styles.modal}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              // gap: 30,
              paddingVertical: 30,

              // width: '100%',
            }}>
            <View style={styles.modalContent}>
              {childrenList.map(child => (
                <TouchableOpacity
                  key={child.id}
                  style={[
                    {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 5,
                    },
                  ]}
                  onPress={() => {
                    setSelectedChild(child.id);
                  }}>
                  <Avatar
                    source={{
                      uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png?f=webp',
                    }}
                    style={[
                      {
                        borderWidth: 0.5,
                        width: 70,
                        height: 70,
                      },
                      isSelectedChild(child.id) && styles.active,
                    ]}
                  />
                  <Text
                    style={{
                      color: Colors.black,
                      fontFamily: FontFamily.SemiBold,
                    }}>
                    {child.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Button
              onPress={() => {
                setModalVisible(!isModalVisible);
              }}
              style={{width: Width - 90}}
              lable="Submit"
            />
          </View>
        </View>
      </Modal> */}
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
    paddingTop: 30,
    gap: 20,
    bottom: 0,
    // height: 600,
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
