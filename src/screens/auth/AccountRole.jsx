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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [role, setRole] = useRQGlobalState('role', value);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([
    {
      label: 'Driver',
      value: 'driver',
      icon: () => (
        <Image
          source={require('../../../assets/images/DriverImg.png')}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: 'User',
      value: 'user',
      icon: () => (
        <Image
          source={require('../../../assets/images/userImg.png')}
          style={styles.iconStyle}
        />
      ),
    },
  ]);

  useEffect(() => {
    setRole(value);
  }, [value]);
  const [checkMargin, setCheckMargin] = useState(false);
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
        <Title Title="Your role" text="Choose your role in Pikid" />
        <View
          style={[
            styles.form,
            checkMargin === true ? {marginBottom: 100} : null,
          ]}>
          <DropDownPicker
            onOpen={() => {
              setCheckMargin(!checkMargin), setError(false);
            }}
            onClose={() => setCheckMargin(false)}
            placeholder="Select a role"
            placeholderStyle={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
            }}
            // onPress={setError(false)}
            labelStyle={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
            }}
            listItemLabelStyle={{
              color: Colors.black,
              fontFamily: FontFamily.Medium,
            }}
            showArrowIcon={true}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownDirection="BOTTOM"
          />
        </View>
        {error && (
          <Text
            style={{
              paddingLeft: 10,
              color: Colors.red,
              marginBottom: 20,
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
