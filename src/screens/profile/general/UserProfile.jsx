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
import React, {useContext} from 'react';
import {GeneralStyle} from '../../../styles/generalStyles';
import {Colors} from '../../../../assets/theme/colors';
import Button from '../../../components/general/Button';
import Icon from 'react-native-vector-icons/Feather';
import {AuthContext, AuthProvider} from '../../../hooks/auth/AuthContext';
import Back from '../../../components/general/Back';
import Avatar from '../../../components/general/Avatar';
import Title from '../../../components/auth/Title';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Sizes} from '../../../../assets/theme/fontSize';
import {Width} from '../../../../assets/ScreenDimensions';
import StatusBarAr from '../../../../assets/theme/StatusBar';
import {Alert} from 'react-native/Libraries/Alert/Alert';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = ({navigation}) => {
  const {userInfo, logout} = useContext(AuthContext);

  const check = () => {
    logout();
  };
  return (
    <View style={GeneralStyle.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Avatar
            source={{
              uri: 'https://st.depositphotos.com/1008402/58359/i/600/depositphotos_583598624-stock-photo-3d-illustration-of-smiling-young.jpg',
            }}
            style={{height: '100%', width: '100%'}}
          />
          <Icon name="edit" size={17} color="#282828" />
        </View>
        <View style={styles.infor}>
          <View>
            <Text style={styles.nameChild}>Jimmy nguyen</Text>
            <Text style={styles.idChild}>ID: 3255151</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.information}>Informations</Text>
            <Text style={styles.information}>
              Phone: <Text style={GeneralStyle.text}>0664841155</Text>{' '}
            </Text>
            <Text style={styles.information}>
              Email: <Text style={GeneralStyle.text}>jen@gmail.com</Text>
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.information}>Your Childs</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  height: 'auto',
                  maxHeight: 230,
                  paddingVertical: 10,
                  paddingHorizontal: 5,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Kidprofile')}
                  style={[styles.container]}>
                  <View style={{height: 60, flexDirection: 'row', gap: 10}}>
                    <Avatar
                      source={{
                        uri: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436200.jpg?w=2000',
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                    <View style={{display: 'flex'}}>
                      <Image
                        style={{width: 50, height: 50, resizeMode: 'contain'}}
                        source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
                        }}
                      />
                      <Text style={styles.idChild}>ID: 35544525</Text>
                    </View>
                  </View>
                  <Icon name="edit" size={17} color="#282828" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Kidprofile')}
                  style={[styles.container]}>
                  <View style={{height: 60, flexDirection: 'row', gap: 10}}>
                    <Avatar
                      source={{
                        uri: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436200.jpg?w=2000',
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                    <View style={{display: 'flex'}}>
                      <Image
                        style={{width: 50, height: 50, resizeMode: 'contain'}}
                        source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
                        }}
                      />
                      <Text style={styles.idChild}>ID: 35544525</Text>
                    </View>
                  </View>
                  <Icon name="edit" size={17} color="#282828" />
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View style={{width: 60, height: 60}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../../assets/images/add.png')}
                />
              </View>
              <Button onPress={check} lable="Sign Out" size="small" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

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
    fontSize: Sizes.text,
    fontFamily: FontFamily.Bold,
    color: Colors.black,
    textAlign: 'center',
  },
  idChild: {
    fontSize: Sizes.text,
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
