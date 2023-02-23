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
import React, {useEffect, useRef} from 'react';
import MapComponent from '../../components/map/MapComponent';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Modalize} from 'react-native-modalize';
import {Colors} from '../../../assets/theme/colors';
import LocationBox from '../../components/general/LocationBox';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Button from '../../components/general/Button';
import Back from '../../components/general/Back';
const ChooseLocation = ({navigation: {goBack}}) => {
  useEffect(() => {
    onOpen();
  });
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <MapComponent />
        <Back style={styles.back} onPress={() => goBack()} />
      </View>
      <View style={styles.searchContainer}>
        
        <LocationBox
          iconName="map-pin"
          placeholder="Current location"
          type="base"
          iconSend="arrow-right"
          BGcolor={Colors.blue1}
        />
        <LocationBox
          style={styles.box}
          type="none"
          iconName="send"
          placeholder="Where to?"
          iconSend="arrow-right"
          BGcolor={Colors.blue1}
        />
        <Button style={styles.btn} lable="Confirm address" />
      </View>
    </View>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({
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
    position: 'absolute',
    paddingTop: 50,
    gap: 20,
    bottom: 0,
    // top: 0,
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
    marginBottom: 20,
  },
  back: {
    // position: 'absolute',
    left: 20,
    top: 20,
  },
});
