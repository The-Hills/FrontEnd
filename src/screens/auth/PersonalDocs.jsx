import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {GeneralStyle} from '../../styles/generalStyles';
import Button from '../../components/general/Button';
import {Colors} from '../../../assets/theme/colors';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';
import PresonalDoc from '../../components/profile/PresonalDoc';
import ImagePicker from 'react-native-image-crop-picker';
import useRQGlobalState from '../../States/useRQGlobalStates';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Input from '../../components/general/Input';
import {AuthContext} from '../../hooks/auth/AuthContext';

const PersonalDocs = ({navigation}) => {
  const [inputs, setInputs] = useRQGlobalState('PersonalDocs', {
    email: null,
    name: null,
    password: null,
    phone: null,
    vehicleName: 'Winner',
    vehicleColor: 'Black',
    vehicleType: 'motorbike',
    vehicleLicensePlates: '1554-553535',
    driverLicense: null,
    vehicleImage: null,
    cardId: null,
    avatar: null,
  });
  const {isLoading, register} = useContext(AuthContext);
  
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const choosePhotoFromLibrary = async (uri, input) => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets) {
      setInputs(prev => {
        return {
          ...prev,
          [input]: result.assets[0].uri,
        };
      });
    }
  };
  const sendRegister = async () => {
    const res = await register(inputs);
    if (res.data.message === 'Successfully') {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={[GeneralStyle.container, styles.container]}>
      <View style={styles.header}>
        <Text
          style={[
            GeneralStyle.title,
            {color: Colors.while, fontFamily: FontFamily.SemiBold},
          ]}>
          Personal documents
        </Text>
      </View>
      <View style={styles.content}>
        <View style={{marginVertical: 10, gap: 20}}>
          <View>
            <Input
              onChangeText={text => handleOnchange(text, 'cardId')}
              lable="ID Card"
            />
          </View>
          <PresonalDoc
            source={{
              uri: `${inputs.drivingLicense}`,
            }}
            label="Driving license"
            description="upload the driving photo here."
            onChangeCamera={() => takePhotoFromCamera('drivingLicense')}
            onChangeUpload={url =>
              choosePhotoFromLibrary(url, 'drivingLicense')
            }
          />
          <PresonalDoc
            source={{
              uri: `${inputs.vehicleImage}`,
            }}
            label="Vehicle Image"
            description="upload the driving photo here."
            onChangeCamera={() => takePhotoFromCamera('vehicleImage')}
            onChangeUpload={url => choosePhotoFromLibrary(url, 'vehicleImage')}
          />
          <PresonalDoc
            source={{
              uri: `${inputs.avatar}`,
            }}
            label="Avatar"
            description="upload the driving photo here."
            onChangeCamera={() => takePhotoFromCamera('avatar')}
            onChangeUpload={url => choosePhotoFromLibrary(url, 'avatar')}
          />
        </View>
        <Button onPress={() => sendRegister()} lable="Submit" />
      </View>
    </View>
  );
};

export default PersonalDocs;

const styles = StyleSheet.create({
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
    flex: 10,
    gap: 10,
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
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    color: Colors.black,
    fontFamily: FontFamily.Medium,
    fontSize: Sizes.text,
  },
});
