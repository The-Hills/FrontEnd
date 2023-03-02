import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';
import {Width} from '../../../assets/ScreenDimensions';
import LogoPkid from '../../components/general/LogoPkid';
import StatusBarAr from '../../../assets/theme/StatusBar';
import LocationBox from '../../components/general/LocationBox';
import {FontFamily} from '../../../assets/theme/fontFamily';
import Vehicle from '../../components/userScreen/Vehicle';
import SavedLocations from '../../components/userScreen/SavedLocations';

const UserHomeScreen = ({navigation}) => {
  return (
    <View style={GeneralStyle.container}>
      <StatusBarAr bg={Colors.main} />
      <View style={styles.top}>
        <View style={styles.bg}>
          <Image
            style={styles.bgImg}
            source={require('../../../assets/images/bg2.png')}
          />
        </View>
        <View style={styles.logo}>
          <LogoPkid
            style={{
              width: 150,
              height: 44,
            }}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <ScrollView>
          <View style={styles.LocationBox}>
            <LocationBox
              onFocus={() => navigation.navigate('ChooseLocation')}
              onPress={() => navigation.navigate('ChooseLocation')}
              style={styles.box}
              iconName="map-pin"
              placeholder="Kid's location"
              type="base"
              iconSend="arrow-right"
              styles1={{
                textInput: {
                  height: 50,
                  marginBottom: 0,
                  backgroundColor: Colors.blue2,
                },
              }}
            />
            <LocationBox
              onFocus={() => navigation.navigate('ChooseLocation')}
              onPress={() => navigation.navigate('ChooseLocation')}
              style={styles.box}
              styles1={{
                textInput: {
                  height: 50,
                  marginBottom: 0,
                  backgroundColor: Colors.while,
                },
              }}
              type="none"
              iconName="send"
              placeholder="Where to?"
              iconSend="arrow-right"
            />
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.listLocation}>
              <SavedLocations url={require('../../../assets/images/new.png')} />
              <SavedLocations
                url={require('../../../assets/images/school.png')}
              />
              <SavedLocations
                url={require('../../../assets/images/home.png')}
              />
              <SavedLocations
                url={require('../../../assets/images/work2.png')}
              />
              <SavedLocations url={require('../../../assets/images/hp.png')} />
            </View>
          </ScrollView>
          <View style={styles.vehicle}>
            <Text style={styles.title}>Select vehicle type</Text>
            <View style={styles.vehicles}>
              <Vehicle url={require('../../../assets/images/moto2.png')} />
              <Vehicle url={require('../../../assets/images/car2.png')} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  LocationBox: {
    paddingHorizontal: 25,
  },
  listLocation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    columnGap: 20,
    marginLeft: 25,
  },
  text: {
    color: Colors.black,
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 100,
  },
  top: {
    flex: 1,
  },
  bg: {
    width: Width,
    height: 500,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
  },
  bottom: {
    flex: 1.6,
    width: Width,
    // paddingHorizontal: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.while,
    marginBottom: 50,
  },
  box: {
    marginTop: 20,
  },
  vehicle: {
    marginVertical: 20,
    paddingHorizontal: 25,
  },
  title: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 18,
    color: Colors.black,
  },
  vehicles: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: Width,
    marginVertical: 15,
  },
});
