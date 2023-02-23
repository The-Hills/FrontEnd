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
import React from 'react';
import {Colors} from '../../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import {GeneralStyle} from '../../../styles/generalStyles';
import Avatar from '../../../components/general/Avatar';
import {Sizes} from '../../../../assets/theme/fontSize';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Width} from '../../../../assets/ScreenDimensions';
import Back from '../../../components/general/Back';

const Kidprofile = ({navigation: {goBack}}) => {
  return (
    <View style={GeneralStyle.container}>
      <Back style={styles.btn} onPress={() => goBack()} />
      <View style={styles.header}>
        <Text style={styles.title}>Kid Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Avatar
            source={{
              uri: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436200.jpg?w=2000',
            }}
            style={{height: '100%', width: '100%'}}
          />
          <Icon name="edit" size={17} color="#282828" />
        </View>
        <View style={styles.infor}>
          <View style={{display: 'flex', justifyContent: 'center',alignItems:'center'}}>
            <Text style={styles.nameChild}>Tom</Text>
            <Text style={styles.idChild}>ID: 3255151</Text>
            <Image
              style={{width: 50, height: 50, resizeMode: 'contain'}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
              }}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.information}>Informations</Text>
            <Text style={styles.information}>
              Full Name: <Text style={GeneralStyle.text}>Thanh Nhat Ha</Text>{' '}
            </Text>
            <Text style={styles.information}>
              Age: <Text style={GeneralStyle.text}>11 years old</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Kidprofile;

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
    top: 30,
  },
  nameChild: {
    size: Sizes.name,
    fontFamily: FontFamily.Bold,
    color: Colors.black,
    textAlign: 'center',
  },
  idChild: {
    size: Sizes.title,
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