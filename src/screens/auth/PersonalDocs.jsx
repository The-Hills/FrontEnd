import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GeneralStyle} from '../../styles/generalStyles';
import Button from '../../components/general/Button';
import {Colors} from '../../../assets/theme/colors';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';
import PresonalDoc from '../../components/profile/PresonalDoc';
import ImagePicker from 'react-native-image-crop-picker';

const PersonalDocs = ({navigation}) => {
  const [images, setImages] = useState({
    driverLicense: '',
    vehicleImage: '',
    cardId: '',
    avatar: '',
  });
  const takePhotoFromCamera = url => {
    ImagePicker.openCamera({
      width: 400,
      height: 300,
      cropping: true,
    }).then(image => {
      setImages({...images, [url]: image});
    });
  };

  const choosePhotoFromLibrary = url => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      cropping: true,
    }).then(image => {
      setImages({...images, [url]: image});
    });
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
          <PresonalDoc
            label="Driving license"
            description="upload the driving photo here."
            onChangeCamera={() => takePhotoFromCamera('drivingLicense')}
            onChangeUpload={() => choosePhotoFromLibrary('drivingLicense')}
          />
          <PresonalDoc
            label="Image vehicle"
            description="upload the driving photo here."
            onChangeCamera={() => takePhotoFromCamera('vehicleImage')}
            onChangeUpload={() => choosePhotoFromLibrary('vehicleImage')}
          />
          <PresonalDoc
            label="VietName ID Card"
            description="upload the driving photo here."
            onChangeCamera={() => takePhotoFromCamera('cardId')}
            onChangeUpload={() => choosePhotoFromLibrary('cardId')}
          />
          <PresonalDoc
            label="Avatar"
            description="upload the driving photo here."
            onChangeCamera={() => takePhotoFromCamera('avatar')}
            onChangeUpload={() => choosePhotoFromLibrary('avatar')}
          />
        </View>
        <Button
          onPress={() => navigation.navigate('DriverHomeScreen')}
          lable="Submit"
        />
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
