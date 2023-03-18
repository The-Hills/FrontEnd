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
import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {GeneralStyle} from '../../styles/generalStyles';
import LogoPkid from '../../components/general/LogoPkid';
import Title from '../../components/auth/Title';
import Button from '../../components/general/Button';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';
import {Colors} from '../../../assets/theme/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import useRQGlobalState from '../../States/useRQGlobalStates';

const AccountRole = ({navigation}) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [role, setRole] = useRQGlobalState('role', null);
  const [error, setError] = useState(false);

  const roles = [
    {
      name: 'driver',
      img: require('../../../assets/images/rolee1.png'),
      title: 'A driver',
      disciption: 'I have a vehicle',
    },
    {
      name: 'user',
      img: require('../../../assets/images/rolee2.png'),
      title: 'A user',
      disciption: 'I want find the driver',
    },
  ];

  // useEffect(() => {
  //   setRole('driver');
  // }, [selectedVehicle]);

  const isSelectedVehicle = id => {
    return id === selectedVehicle;
  };
  const check = index => {
    console.log('set', index);
    setSelectedVehicle(index);
  };
  const submit = () => {
    if (role != null) {
      navigation.navigate('Login');
    } else {
      setError(true);
    }
  };
  return (
    <View style={[GeneralStyle.container, styles.container]}>
      <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
      <View style={styles.header}>
        <LogoPkid
          style={{
            width: 290,
            height: 65,
          }}
        />
      </View>
      <View style={styles.content}>
        <Title Title="I am" text="Choose your role in Pikid" />
        <View style={[styles.form]}>
          {roles.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                check(index), setRole(item.name), setError(false);
              }}
              style={[
                {
                  width: '100%',
                  borderRadius: 15,
                  backgroundColor: Colors.while,
                  paddingHorizontal: 10,
                  display: 'flex',
                  gap: 20,
                  borderWidth: 2,
                  borderColor: Colors.while,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                },
                GeneralStyle.shadow,
                isSelectedVehicle(index) && styles.choose,
              ]}>
              <Image style={{width: 100, height: 100}} source={item.img} />
              <View>
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: FontFamily.SemiBold,
                    fontSize: 20,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: '#777777',
                    fontFamily: FontFamily.Medium,
                    fontSize: 15,
                  }}>
                  {item.disciption}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {error && (
          <Text
            style={{
              paddingLeft: 10,
              color: Colors.red,
              fontFamily: FontFamily.Regular,
            }}>
            Please choose your role!
          </Text>
        )}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 20,
          }}>
          <Button onPress={submit} lable="Next" />
        </View>
      </View>
    </View>
  );
};

export default AccountRole;
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#000',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  choose: {
    borderColor: Colors.main,
  },
  container: {
    backgroundColor: Colors.main,
    height: Height,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
    // marginTop: 40
  },
  content: {
    flex: 5,
    paddingHorizontal: 30,
    paddingTop: 20,
    width: Width,
    // height: 700,
    backgroundColor: Colors.while,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  form: {
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    color: Colors.black,
    fontFamily: FontFamily.Medium,
    fontSize: Sizes.text,
  },
});
