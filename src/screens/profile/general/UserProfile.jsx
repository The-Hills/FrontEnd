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
import React, {useContext, useEffect, useRef, useState} from 'react';
import {GeneralStyle} from '../../../styles/generalStyles';
import {Colors} from '../../../../assets/theme/colors';
import Button from '../../../components/general/Button';
import Icon from 'react-native-vector-icons/Feather';
import {AuthContext, AuthProvider} from '../../../hooks/auth/AuthContext';
import Avatar from '../../../components/general/Avatar';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Sizes} from '../../../../assets/theme/fontSize';
import {Width} from '../../../../assets/ScreenDimensions';
import StatusBarAr from '../../../../assets/theme/StatusBar';

import {getUserInfoById} from '../../../API/user.api';
import {getUIdAsync} from '../../../utils/StorageUtils';
import {useUserQuery} from '../../../hooks/useUser';
import Loader from '../../../components/loader/Loader';
import Error from '../../Intro/Error';
import Header from '../../../components/general/Header';

const UserProfile = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const {data} = useUserQuery();
  const UserData = data.data.data;
  const check = () => {
    logout();
  };
  return (
    <View style={GeneralStyle.container}>
      <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
      <Header show={true} lable="Profile" />
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Avatar
            source={{
              uri: `${UserData.avatar}`,
            }}
            style={{width: 100, height: 100, backgroundColor: Colors.red}}
          />
          <View>
            <Text style={styles.nameChild}>{UserData.name}</Text>
          </View>
        </View>

        <View style={styles.infor}>
          <View style={{marginTop: 10}}>
            <Text style={styles.information}>Informations</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 5,
              }}>
              <Text style={styles.lable}>Phone:</Text>
              <Text style={styles.text}>{UserData.phone}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.lable}>Email:</Text>
              <Text style={styles.text}>email@gmail.com</Text>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.information}>Your Childs</Text>
            <ScrollView
              style={{
                height: 'auto',
                maxHeight: 200,
                paddingVertical: 10,
              }}>
              {/* <View style={{backgroundColor: 'red', height: 500}}></View> */}
              <View style={{paddingVertical: 10}}>
                {UserData.kid.lenght != 0 ? (
                  UserData.kid.map(item => {
                    return (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate('Kidprofile')}
                        style={[styles.container]}>
                        <View
                          style={{height: 60, flexDirection: 'row', gap: 10}}>
                          <Avatar
                            source={{
                              uri: `${item.avatar}`,
                            }}
                            style={{
                              width: 60,
                              height: 60,
                            }}
                          />
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-around',
                              height: '100%',
                              // justifyContent: 'flex-start',
                            }}>
                            <Text style={styles.idChild}>
                              Name: {item.name}
                            </Text>
                            <Text style={styles.idChild}>Age: {item.age}</Text>
                          </View>
                        </View>
                        <Image
                          style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'contain',
                          }}
                          source={{
                            uri: `${item.qr}`,
                          }}
                        />
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 50, height: 50}}
                      source={require('../../../../assets/images/empty.png')}
                    />
                    <Text
                      style={{
                        color: Colors.red,
                        textAlign: 'center',
                        fontFamily: FontFamily.Medium,
                      }}>
                      Please add your kid's profiles
                    </Text>
                  </View>
                )}
              </View>
            </ScrollView>
            <View
              style={{
                display: 'flex',
                gap: 10,
                marginVertical: 15,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProfileRegister')}>
                  <Text
                    style={{
                      color: Colors.main,
                      fontFamily: FontFamily.Medium,
                      fontSize: 18,
                    }}>
                    Create kid profile
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={check}>
                <Text
                  style={{
                    color: Colors.red,
                    fontFamily: FontFamily.Medium,
                    fontSize: 18,
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
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
    paddingVertical: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.while,
  },
  text: {
    color: Colors.black,
    fontFamily: FontFamily.Regular,
    fontSize: 15,
  },
  information: {
    fontFamily: FontFamily.Medium,
    color: '#C7C7C7',
    fontSize: 12,
  },
  lable: {
    fontFamily: FontFamily.Medium,
    color: Colors.black,
    fontSize: 15,
  },
  avatar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
    borderColor: '#C7C7C7',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 30,
    width: Width - 60,
  },
  content: {
    flexGrow: 3,
    width: '100%',
    backgroundColor: Colors.while,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    lineHeight: 24,
  },
  infor: {
    flex: 2.9,
    width: Width,
    paddingHorizontal: 30,
    // top: 10,
  },
  nameChild: {
    fontSize: 18,
    fontFamily: FontFamily.Medium,
    color: Colors.black,
    textAlign: 'center',
  },
  idChild: {
    fontSize: Sizes.text,
    color: Colors.black,
    textAlign: 'left',
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
