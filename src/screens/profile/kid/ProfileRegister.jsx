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

const ProfileRegister = ({navigation: {goBack}}) => {
  const useKidMutation = useCreateKidInfo();
  const data = useUserQuery();
  const [inputs, setInputs] = useState({
    parentId: data.data.data.id,
    name: null,
    age: null,
    gender: null,
    url: 'https://cdn3d.iconscout.com/3d/premium/thumb/cool-boy-7215485-5873297.png',
  });
  // if (isLoading) {
  //   return <Loader visible={true} />;
  // }
  // if (isSuccess) {
  //   return (
  //     <View>
  //       <Text style={{color: 'red'}}>Success!</Text>
  //     </View>
  //   );
  // }
  // if (isError) {
  //   return (
  //     <View>
  //       <Text style={{color: 'red'}}>Error roi!</Text>
  //     </View>
  //   );
  // }
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
      <Back style={styles.btn} onPress={() => goBack()} />
      <View style={styles.header}>
        <Text style={styles.title}>Create Kid Profile</Text>
      </View>
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
    </View>
  );
};

export default ProfileRegister;

const styles = StyleSheet.create({
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
