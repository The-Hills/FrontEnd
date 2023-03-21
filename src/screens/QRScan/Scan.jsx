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
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Width, Height} from '../../../assets/ScreenDimensions';
import Button from '../../components/general/Button';
import Header from '../../components/general/Header';
import Modal from 'react-native-modal';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Colors} from '../../../assets/theme/colors';
import useRQGlobalState from '../../States/useRQGlobalStates';
import {
  useBookingDetail,
  usePickupBooking,
} from '../../hooks/booking/useBooking';

const Scan = ({navigation: {goBack}}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const useMutateUpdateBooking = usePickupBooking();
  const [modal, setModal] = useState(false);
  // const [qrCode, setQrCode] = useState('');
  const [kidID] = useRQGlobalState('kidID', null);
  const [bookingID] = useRQGlobalState('bookingID', null);

  const qrCodeScan = ({data}) => {
    if (kidID === data) {
      setModalVisible(true);
      setModal(true);
      pickup();
    }
    if (kidID !== data) {
      setModalVisible(true);
      setModal(false);
    }
  };
  console.log('bookingID', bookingID);
  const pickup = async () => {
    useMutateUpdateBooking.mutate({
      id: bookingID,
      data: {
        status: 'onRide',
      },
    });
  };
  return (
    <View
      style={{
        width: Width,
        height: Height,
      }}>
      <QRCodeScanner
        reactivate={true}
        fadeIn={true}
        cameraStyle={{width: Width, height: '90%'}}
        topContent={
          <Header onPress={() => goBack()} lable="Verify the kid" show={true} />
        }
        // topViewStyle={{height: 50, top: 0}}
        bottomViewStyle={{position: 'absolute', bottom: 50}}
        onRead={qrCodeScan}
        bottomContent={
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Image
              style={{width: 250, height: 250, marginBottom: 200}}
              source={require('../../../assets/images/scan.png')}
            />
            <Button lable="Scan" />
          </View>
        }
      />
      <Modal
        animationInTiming={0}
        onSwipeComplete={() => {
          modal === true
            ? (setModalVisible(false), goBack())
            : setModalVisible(false);
        }}
        swipeDirection="right"
        isVisible={isModalVisible}>
        <View style={styles.modal}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              // gap: 30,
              paddingHorizontal: 20,
              paddingVertical: 30,

              // width: '100%',
            }}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              {modal === true ? (
                <>
                  <Image
                    style={{
                      width: Width / 2.5,
                      height: Width / 2.5,
                      position: 'absolute',
                      left: -60,
                      bottom: -50,
                    }}
                    source={require('../../../assets/images/sss1.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      paddingLeft: 20,
                      color: '#144451',
                      fontSize: 22,
                      fontFamily: FontFamily.SemiBold,
                    }}>
                    Success!
                  </Text>
                </>
              ) : (
                <>
                  <Image
                    style={{
                      width: Width / 2.5,
                      height: Width / 2.5,
                      position: 'absolute',
                      left: -60,
                      bottom: -50,
                    }}
                    source={require('../../../assets/images/f1.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      paddingLeft: 20,
                      color: '#144451',
                      fontSize: 22,
                      fontFamily: FontFamily.SemiBold,
                    }}>
                    Failed!
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  modal: {
    backgroundColor: Colors.while,
    height: 100,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
