import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Switch,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  AppState,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Header from '../../../components/DriverScreen/Header';
import {Colors} from '../../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import {Height, Width} from '../../../../assets/ScreenDimensions';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {AuthContext} from '../../../hooks/auth/AuthContext';
import {useDriverQuery, useUpdateDriver} from '../../../hooks/useUser';
import useRQGlobalState from '../../../States/useRQGlobalStates';

const DriverProfile = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {logout} = useContext(AuthContext);
  const {data} = useDriverQuery();
  const DriverData = data.data.data;
  // console.log(DriverData);
  const useDriverMutate = useUpdateDriver();
  const toggleSwitch = () => {
    setIsEnabled(previousState => {
      changeStatus(!previousState);
      return !previousState;
    });
  };
  const changeStatus = status => {
    if (status) {
      useDriverMutate.mutate({
        id: DriverData.id,
        status: 'active',
      });
    } else {
      useDriverMutate.mutate({
        id: DriverData.id,
        status: 'unActive',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 16,
            }}>
            Status
          </Text>
          <Switch
            style={{transform: [{scaleX: 1.3}, {scaleY: 1.3}]}}
            trackColor={{false: '#767577', true: '#34A853'}}
            thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 16,
            }}>
            Your rating
          </Text>
          <View
            style={{
              height: '60%',
              width: 60,
              backgroundColor: '#D9D9D9',
              borderRadius: 90,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}>
            <Image
              style={{width: 22, height: 22}}
              source={require('../../../../assets/images/star.png')}
            />
            <Text
              style={{
                color: Colors.black,
                fontFamily: FontFamily.Medium,
                lineHeight: 20,
              }}>
              4.5
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserProfile')}
          activeOpacity={0.5}
          style={styles.row}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 16,
            }}>
            Setting
          </Text>
          <Icon name="chevron-right" color={Colors.black} size={24} />
        </TouchableOpacity>
        <View style={styles.row}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 16,
            }}>
            History
          </Text>
          <Icon name="chevron-right" color={Colors.black} size={24} />
        </View>
        <TouchableOpacity onPress={logout} style={styles.row}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
              fontSize: 16,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: Colors.while,
    height: Height,
    width: Width,
  },
  content: {
    marginVertical: 20,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(172, 172, 172, 0.25)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    marginVertical: 5,
  },
});
