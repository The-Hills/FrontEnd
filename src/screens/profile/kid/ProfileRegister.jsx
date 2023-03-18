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
import Back from '../../../components/general/Back';
import {Colors} from '../../../../assets/theme/colors';
import {GeneralStyle} from '../../../styles/generalStyles';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import {Sizes} from '../../../../assets/theme/fontSize';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Width} from '../../../../assets/ScreenDimensions';
import Avatar from '../../../components/general/Avatar';
import Input from '../../../components/general/Input';
import Button from '../../../components/general/Button';

import Loader from '../../../components/loader/Loader';
import {useCreateKidInfo, useUserQuery} from '../../../hooks/useUser';
import Header from '../../../components/general/Header';
import Modal from 'react-native-modal';

const ProfileRegister = ({navigation: {goBack}}) => {
  const useKidMutation = useCreateKidInfo();
  const {data} = useUserQuery();
  const [inputs, setInputs] = useState({
    parentId: data.data.data.id,
    name: null,
    age: null,
    gender: null,
    url: 'https://cdn3d.iconscout.com/3d/premium/thumb/cool-boy-7215485-5873297.png',
  });
  const [isModalVisible, setModalVisible] = useState(true);
  const choosePhotoFromLibrary = url => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      cropping: true,
    }).then(image => {
      setInputs(prev => {
        return {
          ...prev,
          url: image.path,
        };
      });
    });
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const Submit = () => {
    useKidMutation.mutate(inputs);
  };
  return (
    <View style={GeneralStyle.container}>
      <Header lable="Create Kid profile" show={true} onPress={() => goBack()} />
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Avatar
            source={{
              uri: `${inputs.url}`,
            }}
            style={{height: '100%', width: '100%'}}
          />
          <TouchableOpacity
            onPress={() => choosePhotoFromLibrary()}
            style={{position: 'absolute', bottom: 0, right: 0}}>
            <Icon name="upload" size={24} color="#282828" />
          </TouchableOpacity>
        </View>
        <View style={styles.infor}>
          <Input
            lable="Name"
            onChangeText={text => handleOnchange(text, 'name')}
          />
          <Input
            lable="Age"
            onChangeText={text => handleOnchange(text, 'age')}
          />
          <Input
            lable="gender"
            onChangeText={text => handleOnchange(text, 'gender')}
          />
          <Button onPress={Submit} lable="Submit" />
        </View>
      </View>
      {useKidMutation.isSuccess && (
        <Modal
          animationInTiming={0}
          onSwipeComplete={() => {
            setModalVisible(false), goBack();
          }}
          swipeDirection="down"
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
                <Image
                  style={{
                    width: Width / 2.5,
                    height: Width / 2.5,
                    position: 'absolute',
                    left: -60,
                    bottom: -50,
                  }}
                  source={require('../../../../assets/images/newpr.png')}
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
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default ProfileRegister;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.while,
    height: 100,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.while,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
  text: {
    color: Colors.black,
  },
  btn: {
    position: 'absolute',
    left: 20,
  },
  header: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  information: {
    fontFamily: FontFamily.Medium,
    color: Colors.black,
    fontSize: Sizes.name,
  },
  title: {
    fontFamily: FontFamily.Medium,
    color: Colors.main,
    fontSize: Sizes.title,
  },
  content: {
    flexGrow: 9,
    width: Width,
    backgroundColor: Colors.while,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    lineHeight: 24,
  },
  avatar: {
    height: 109,
    width: 109,
    borderRadius: 90,
    backgroundColor: '#D9D9D9',
  },
  infor: {
    width: Width,
    paddingHorizontal: 30,
    top: 10,
  },
  nameChild: {
    fontSize: Sizes.name,
    fontFamily: FontFamily.Bold,
    color: Colors.black,
    textAlign: 'center',
  },
  idChild: {
    fontSize: Sizes.title,
    color: Colors.black,
    textAlign: 'center',
  },
  img: {
    width: 65,
    height: 65,
    top: 50,
  },
  detailInfor: {
    left: '-25%',
  },
});
