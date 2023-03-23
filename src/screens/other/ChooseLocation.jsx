import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  Linking,
  StyleSheet,
  Image,
  Pressable,
  SectionList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Children, useEffect, useRef, useState} from 'react';
import MapComponent from '../../components/map/MapComponent';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Modalize} from 'react-native-modalize';
import Modal from 'react-native-modal';
import {Colors} from '../../../assets/theme/colors';
import LocationBox from '../../components/general/LocationBox';
import Button from '../../components/general/Button';
import Back from '../../components/general/Back';
import {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  GOOGLE_API_KEY,
  GOOGLE_API_KEY_2,
  PLACES_API_KEY,
  EM_CO_CHAC_KHONG,
} from '../../../assets/APIKey';
// import Vehicle from '../../components/userScreen/Vehicle';
import Avatar from '../../components/general/Avatar';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {carsAround, childrenList, VehiclesType} from '../../../assets/data';
import VehicleType from '../../components/booking/Vehicle';
import Confirm from '../../components/booking/Confirm';
import {useUserQuery} from '../../hooks/useUser';
import {
  useBooking,
  usePayment,
  useVehicale,
} from '../../hooks/booking/useBooking';
import {NetworkInfo} from 'react-native-network-info';
import Loader from '../../components/loader/Loader';
import Loader2 from '../../components/loader/Loader2';
import Vehicles from '../../components/DriverScreen/Vehicles';
import useRQGlobalState from '../../States/useRQGlobalStates';
import {LogBox} from 'react-native';
import ContentModal from '../../components/booking/ContentModal';
import {setBookingIDAsync} from '../../utils/StorageUtils';

const ChooseLocation = ({navigation, navigation: {goBack}}) => {
  // react Query
  const useBookingMutation = useBooking();
  const usePaymentMutation = usePayment();
  const {data} = useUserQuery();

  //  states
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [pickDetail, setPickDetail] = useState(null);
  const [dropDetail, setDropDetail] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [Sellect, setSellect] = useState('none');
  const [type] = useRQGlobalState('type', 0);
  const [feeMoto] = useRQGlobalState('feeMoto', 0);
  const [feeCar] = useRQGlobalState('feeCar', 0);

  const [shouldShow, setShouldShow] = useState(1);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ipAddress, setIpAddress] = useState(null);
  const [payment, setPayment] = useState(null);
  const [modalConent, setModalConent] = useState(null);
  const [bookiingID, setBookingID] = useRQGlobalState('id', null);
  const kidData = data.data.data.kid;
  const [selectedChild, setSelectedChild] = useState(kidData[0].id);
  const paymentData = usePaymentMutation.data;
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  useEffect(() => {
    console.log('paymentID');
    if (usePaymentMutation.status === 'success') {
      setPayment(paymentData.data);
    }
  }, [paymentData]);

  const mapRef = useRef(null);

  const modalizeRef = useRef(null);

  NetworkInfo.getIPAddress().then(ipAddress => {
    setIpAddress(ipAddress);
  });
  const isSelectedChild = id => {
    return id === selectedChild;
  };

  const onOpen = async () => {
    modalizeRef.current?.open('top');
  };
  const onClose = async () => {
    modalizeRef.current?.close('alwaysOpen');
  };

  const moveTo = async position => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, {duration: 1000});
    }
  };
  useEffect(() => {
    traceRoute();
  }, [origin, destination]);
  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      setSellect('flex');
    }
  };

  const CheckSellectVehicleTye = () => {
    setShouldShow(3);
  };

  const onPlaceSelected = (details, flag) => {
    const position = {
      latitude: details?.geometry.location.lat,
      longitude: details?.geometry.location.lng,
    };

    if (flag === 'origin') {
      setOrigin(position);
      setPickDetail(details);
    } else {
      setDestination(position);
      setDropDetail(details);
    }
    moveTo(position);
  };
  useEffect(() => {
    if (origin && destination) {
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: {
          top: 200,
          right: 200,
          bottom: 1000,
          left: 200,
        },
        animated: true,
      });
    }
  }, [distance]);

  const sendRequets = () => {
    console.log('hi');
    useBookingMutation.mutate({
      distance: distance,
      startLocation: pickDetail.formatted_address,
      endLocation: dropDetail.formatted_address,
      startPosition: origin,
      endPosition: destination,
      fee: type !== 0 ? feeCar : feeMoto,
      payment: payment.id,
      kidId: selectedChild,
      typeVehicle: type !== 0 ? 'Car' : 'Motobike',
    });

    console.log('useBookingMutation => ', useBookingMutation.data);
  };

  if (useBookingMutation.isSuccess) {
    console.log('nothing', useBookingMutation);
    setBookingIDAsync(useBookingMutation?.data?.data?.data?.id);
  }

  if (useBookingMutation.isError) {
    console.log('loiiiiii');
    return (
      <View>
        <Text style={{color: 'red'}}>error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapComponent ref={mapRef}>
          {origin && (
            <Marker
              title={`kid's Location`}
              identifier="origin"
              coordinate={origin}>
              <Image
                source={require('../../../assets/images/piker.png')}
                style={{height: 80, width: 40, resizeMode: 'contain'}}></Image>
            </Marker>
          )}
          {destination && (
            <Marker
              title={`Drop Location`}
              identifier="destination"
              coordinate={destination}
            />
          )}
          {showDirections && origin && destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_API_KEY}
              strokeWidth={5}
              strokeColor="hotpink"
              onReady={result => {
                setDistance(result.distance);
                setDuration(Math.floor(result.duration));
              }}
            />
          )}
        </MapComponent>
        <Back style={styles.back} onPress={() => goBack()} />
      </View>
      <Modalize
        disableScrollIfPossible={true}
        keyboardAvoidingOffset={300}
        alwaysOpen={350}
        adjustToContentHeight={true}
        withOverlay={false}
        ref={modalizeRef}>
        {shouldShow == 1 ? (
          <View style={[styles.searchContainer, {height: 700}]}>
            <View style={{marginTop: 30, display: 'flex', gap: 30}}>
              <LocationBox
                onPlaceSelected={details => {
                  onPlaceSelected(details, 'origin');
                  onClose();
                }}
                onFocus={() => {
                  onOpen();
                }}
                iconName="map-pin"
                placeholder="Kid's location"
                type="base"
                iconSend="arrow-right"
                styles1={{
                  container: {
                    flex: 1,
                    height: 50,
                    alignItems: 'center',
                  },
                  textInputContainer: {
                    flexDirection: 'row',
                  },
                  textInput: {
                    backgroundColor: Colors.blue2,
                    height: 50,
                    borderRadius: 5,
                    paddingVertical: 5,
                    marginBottom: 0,
                    paddingHorizontal: 10,
                    fontSize: 15,
                    flex: 1,
                    color: Colors.black,
                  },
                  powered: {
                    display: 'none',
                  },
                  listView: {
                    position: 'absolute',
                    width: Width,
                    paddingHorizontal: 30,
                    left: -65,
                    zIndex: 300,
                    top: 130,
                  },
                  row: {
                    backgroundColor: Colors.while,
                    height: 50,
                    flexDirection: 'row',
                  },
                  separator: {
                    height: 0.5,
                    backgroundColor: '#c8c7cc',
                  },
                  description: {
                    color: Colors.black,
                  },
                  loader: {
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: 20,
                  },
                }}
              />
              <LocationBox
                onPlaceSelected={details => {
                  onPlaceSelected(details, 'destination');
                }}
                onFocus={() => {
                  onOpen();
                }}
                style={styles.box}
                type="none"
                iconName="send"
                BGcolor={Colors.while}
                placeholder="Where to?"
                iconSend="arrow-right"
                marginTop={50}
                styles1={{
                  container: {
                    flex: 1,
                    height: 50,
                  },
                  textInputContainer: {
                    flexDirection: 'row',
                  },
                  textInput: {
                    backgroundColor: Colors.while,
                    height: '100%',
                    borderRadius: 5,
                    height: 50,
                    marginBottom: 0,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    fontSize: 15,
                    flex: 1,
                    color: Colors.black,
                  },
                  powered: {
                    display: 'none',
                  },
                  listView: {
                    position: 'absolute',
                    width: Width,
                    paddingHorizontal: 30,
                    left: -65,
                    zIndex: 200,
                    top: 65,
                  },
                  row: {
                    backgroundColor: Colors.while,
                    height: 50,
                    flexDirection: 'row',
                  },
                  separator: {
                    height: 0.5,
                    backgroundColor: '#c8c7cc',
                  },
                  description: {
                    color: Colors.black,
                  },
                  loader: {
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    height: 20,
                  },
                }}
              />
            </View>
            <View style={{display: Sellect}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {kidData
                  .filter(child => child.id == selectedChild)
                  .map(child => (
                    <View
                      key={child.id}
                      style={{height: 60, flexDirection: 'row', gap: 10}}>
                      <Avatar
                        source={{
                          uri: `${child.avatar}`,
                        }}
                        style={{
                          borderWidth: 0.5,
                          width: 60,
                          height: 60,
                        }}
                      />
                      <View
                        style={{
                          height: '100%',
                          flexDirection: 'column',
                          gap: 5,
                        }}>
                        <Image
                          style={{
                            borderWidth: 0.5,
                            width: 40,
                            height: 40,
                          }}
                          source={{
                            uri: `${child.qr}`,
                          }}
                        />
                        <Text style={{color: Colors.black}}>
                          Name: {child.name}
                        </Text>
                      </View>
                    </View>
                  ))}
                <Button
                  onPress={() => {
                    setModalConent(1);
                    setModalVisible(!isModalVisible);
                  }}
                  type="hollow"
                  size="small"
                  lable="Change"
                />
              </View>
              <Button
                onPress={() => {
                  setShouldShow(2);
                }}
                style={[styles.btn]}
                lable="Confirm address"
              />
            </View>
          </View>
        ) : shouldShow == 2 ? (
          <View style={[styles.searchContainer, {height: 600}]}>
            <View style={{marginBottom: 20, marginTop: 30}}>
              <Vehicles distance={distance} time={3} />
            </View>
            <Button onPress={() => CheckSellectVehicleTye()} lable="Next" />
          </View>
        ) : shouldShow == 3 ? (
          <View style={[styles.searchContainer, {height: 500}]}>
            <Loader2 visible={usePaymentMutation.isLoading ? true : false} />
            <Confirm
              distance={distance}
              style={{paddingTop: 30}}
              payment={() => {
                usePaymentMutation.mutate({
                  amount: type !== 0 ? feeCar : feeMoto,
                  ipAddress: ipAddress,
                });
              }}
              time={3}
              vehicleType={type !== 0 ? 'Car' : 'Motobike'}
              pickLoation={pickDetail.formatted_address}
              dropOff={dropDetail.formatted_address}
              findDriver={() => {
                sendRequets();
                // setModalVisible(!isModalVisible);
                Linking.openURL(payment?.url);
                navigation.navigate('Booking');
              }}
            />
          </View>
        ) : null}
      </Modalize>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="right">
        <View
          style={[
            styles.modal,
            modalConent === 1 ? {height: 220} : {height: 100},
          ]}>
          {modalConent === 1 ? (
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                paddingHorizontal: 20,
                paddingVertical: 30,
              }}>
              <ScrollView horizontal={true} style={styles.modalContent}>
                {kidData.map(child => (
                  <TouchableOpacity
                    key={child.id}
                    style={[
                      {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 5,
                        paddingHorizontal: 15,
                        // paddingRight: 30,
                      },
                    ]}
                    onPress={() => {
                      setSelectedChild(child.id);
                    }}>
                    <Avatar
                      source={{
                        uri: `${child.avatar}`,
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
              </ScrollView>
              <Button
                onPress={() => {
                  setModalVisible(!isModalVisible);
                }}
                style={{width: Width - 90}}
                lable="Submit"
              />
            </View>
          ) : modalConent === 2 ? (
            <ContentModal
              source={require('../../../assets/images/find6.png')}
              title="Finding Driver"
            />
          ) : null}
        </View>
      </Modal>
    </View>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({
  activeVehicle: {
    borderBottomColor: Colors.main,
    borderBottomWidth: 1.5,
  },
  modalContent: {
    gap: 30,
    display: 'flex',
    // justifyContent: 'center',
  },
  modal: {
    backgroundColor: Colors.while,
    height: 230,
    borderRadius: 15,
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
  searchContainer: {
    // display:
    // paddingTop: 30,
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
    // padding: 8,
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
