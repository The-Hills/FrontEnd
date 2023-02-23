import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapComponent from '../../components/map/MapComponent';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Modalize} from 'react-native-modalize';
import {Colors} from '../../../assets/theme/colors';
import LocationBox from '../../components/general/LocationBox';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const ChooseLocation = () => {
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
      </View>
      <Modalize ref={modalizeRef} withOverlay={false} adjustToContentHeight>
        <View style={{height: 800, paddingHorizontal: 20,backgroundColor:'red'}}>
          {/* <View style={styles.LocationBox}>
            <LocationBox
              style={styles.box}
              iconName="map-pin"
              placeholder="Current location"
              type="base"
              iconSend="arrow-right"
            />
            <LocationBox
              style={styles.box}
              type="none"
              iconName="send"
              placeholder="Where to?"
              iconSend="arrow-right"
            />
          </View> */}
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyCnijHwZerVApB9pAIRRCm_8gjMzReprJE',
              language: 'en',
            }}
          />
        </View>
      </Modalize>
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
});
