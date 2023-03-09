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
import {PLACES_API_KEY} from '../../../assets/APIKey';
// import Vehicle from '../../components/userScreen/Vehicle';
import Avatar from '../../components/general/Avatar';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {carsAround, childrenList, VehiclesType} from '../../../assets/data';
import VehicleType from '../../components/booking/Vehicle';
import Confirm from '../../components/booking/Confirm';

const ChooseLocation = ({navigation: {goBack}}) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [pickDetail, setPickDetail] = useState(null);
  const [dropDetail, setDropDetail] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [Sellect, setSellect] = useState('none');
  const [selectedChild, setSelectedChild] = useState(childrenList[0].id);
  const [selectedVehicle, setSelectedVehicle] = useState();
  const [shouldShow, setShouldShow] = useState(1);

  const mapRef = useRef(null);

  const modalizeRef = useRef(null);

  const isSelectedChild = id => {
    return id === selectedChild;
  };

  const isSelectedVehicle = id => {
    return id === selectedVehicle;
  };
  const onOpen = async () => {
    modalizeRef.current?.open('top');
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
  });
  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      setSellect('flex');
    }
  };

  const CheckSellectVehicleTye = () => {
    if (selectedVehicle != null) {
      setShouldShow(3);
    }
  };

  const onPlaceSelected = (details, flag) => {
    const position = {
      latitude: details?.geometry.location.lat,
      longitude: details?.geometry.location.lng,
    };
    // const address = {
    //   addressName: details?.address_components
    // }
    if (flag === 'origin') {
      setOrigin(position);
      setPickDetail(details);
    } else {
      setDestination(position);
      setDropDetail(details);
    }
    moveTo(position);
  };
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapComponent ref={mapRef}>
          {origin && (
            <Marker coordinate={origin}>
              <Image
                source={require('../../../assets/images/piker.png')}
                style={{height: 80, width: 40, resizeMode: 'contain'}}></Image>
            </Marker>
          )}
          {destination && <Marker coordinate={destination} />}
          {carsAround.map((car, index) => (
            <Marker coordinate={car.location} key={index}>
              {car.vehicleType == 'Car' ? (
                <Image
                  source={require('../../../assets/images/car.png')}
                  style={{
                    height: 80,
                    width: 40,
                    resizeMode: 'contain',
                  }}></Image>
              ) : (
                <Image
                  source={require('../../../assets/images/moto.png')}
                  style={{
                    height: 80,
                    width: 40,
                    resizeMode: 'contain',
                  }}></Image>
              )}
            </Marker>
          ))}
          {showDirections && origin && destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={PLACES_API_KEY}
              strokeWidth={5}
              strokeColor="hotpink"
              onReady={result => {
                console.log(`Distance: ${result.distance} km`);
              }}
            />
          )}
        </MapComponent>
        <Back style={styles.back} onPress={() => goBack()} />
      </View>
      <Modalize
        disableScrollIfPossible={true}
        keyboardAvoidingOffset={300}
        alwaysOpen={320}
        adjustToContentHeight={true}
        withOverlay={false}
        ref={modalizeRef}>
        {shouldShow == 1 ? (
          <View style={[styles.searchContainer, {height: 700}]}>
            <LocationBox
              onPlaceSelected={details => {
                onPlaceSelected(details, 'origin');
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
            <View style={{display: Sellect}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {childrenList
                  .filter(child => child.id == selectedChild)
                  .map(child => (
                    <View
                      key={child.id}
                      style={{height: 60, flexDirection: 'row', gap: 10}}>
                      <Avatar
                        source={{
                          uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/boy-7215504-5873316.png?f=webp',
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
                          source={require('../../../assets/images/image13.png')}
                        />
                        <Text style={{color: Colors.black}}>
                          ID: {child.id} {child.name}
                        </Text>
                      </View>
                    </View>
                  ))}
                <Button
                  onPress={() => {
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
          <View style={[styles.searchContainer, {height: 500}]}>
            <Confirm
              pickLoation={pickDetail.formatted_address}
              dropOff={dropDetail.formatted_address}
            />
          </View>
        ) : null}
      </Modalize>
      <Modal
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
  searchContainer: {
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
