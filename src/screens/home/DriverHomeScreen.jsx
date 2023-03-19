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
import React, {useEffect, useState} from 'react';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import Header from '../../components/DriverScreen/Header';
import {FontFamily} from '../../../assets/theme/fontFamily';
import RequestItem from '../../components/DriverScreen/RequestItem';
import {Requests} from '../../../assets/data';
import {useDriverQuery} from '../../hooks/useUser';
import {useBookingData} from '../../hooks/booking/useBooking';
import Loader from '../../components/loader/Loader';
import Error from '../Intro/Error';
import useRQGlobalState from '../../States/useRQGlobalStates';

const DriverHomeScreen = ({navigation}) => {
  const [driverData] = useRQGlobalState('driverData', null);
  const {isError, isLoading, data} = useBookingData();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }
  const BookingData = data.data.data;
  const filteredData = BookingData?.filter(item => item.status === 'onTracking')
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 20,
        height: '100%',
        backgroundColor: Colors.while,
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <Header />
      </View>
      {driverData &&
      driverData.status === 'active' &&
      (!BookingData || filteredData.length == 0) ? (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          <Image
            style={{width: Width / 1.2, height: Width / 1.2}}
            source={require('../../../assets/images/nodata.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              paddingHorizontal: 30,
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 20,
            }}>
            No request
          </Text>
        </View>
      ) : driverData && driverData.status === 'active' ? (
        <FlatList
          style={styles.container}
          ListHeaderComponentStyle={styles.HeaderStyle}
          ListHeaderComponent={() => (
            <View style={{backgroundColor: Colors.while}}>
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: FontFamily.SemiBold,
                  fontSize: 20,
                  marginTop: 10,
                }}>
                New request
              </Text>
            </View>
          )}
          stickyHeaderIndices={[0]}
          data={filteredData}
          scrollEnabled={true}
          ItemSeparatorComponent={() => <View style={{height: 40}} />}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item, index}) => (
            <RequestItem
              startPosition={item.startPosition}
              endPosition={item.endPosition}
              avatar={item.kid.parent.avatar}
              name={item.kid.parent.name}
              startLocation={item.startLocation}
              endLocation={item.endLocation}
              distance={item.distance}
              fee={item.fee}
              kidName={item.kid.name}
              qr={item.kid.qr}
              kidAvatar={item.kid.avatar}
              key={index}
              onAccept={() => navigation.navigate('MapScreenDriver', {item})}
            />
          )}
        />
      ) : (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          <Image
            style={{width: Width / 1.2, height: Width / 1.2}}
            source={require('../../../assets/images/off.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              paddingHorizontal: 30,
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 20,
            }}>
            Please switch to online to receive requests!
          </Text>
        </View>
      )}
    </View>
  );
};

export default DriverHomeScreen;

const styles = StyleSheet.create({
  HeaderStyle: {
    width: '100%',
    // paddingTop:20
  },
  container: {
    backgroundColor: Colors.while,
    paddingHorizontal: 30,
    height: Height,
    width: Width,
    // paddingTop: 20,
    // paddingVertical: 20,
    // paddingBottom: 100,
  },
});
