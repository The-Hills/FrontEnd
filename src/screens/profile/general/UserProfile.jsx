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
import Back from '../../../components/general/Back';
import Avatar from '../../../components/general/Avatar';
import Title from '../../../components/auth/Title';
import {FontFamily} from '../../../../assets/theme/fontFamily';
import {Sizes} from '../../../../assets/theme/fontSize';
import {Width} from '../../../../assets/ScreenDimensions';
import StatusBarAr from '../../../../assets/theme/StatusBar';

import {getUserInfoById} from '../../../API/user.api';
import {getUIdAsync} from '../../../utils/StorageUtils';
import {useUserQuery} from '../../../hooks/useUser';
import Loader from '../../../components/loader/Loader';
import Error from '../../Intro/Error';

const UserProfile = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const {isLoading, data, isError} = useUserQuery();
  if (isLoading) {
    return (
      <View>
        <Loader visible={true} />
      </View>
    );
  }
  if (isError) {
    return <Error />;
  }
  const UserData = data.data.data;
  console.log('kidList', UserData.kid);
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
              uri: `${UserData.avatar}`,
            }}
            style={{height: '100%', width: '100%'}}
          />
          <View style={{position: 'absolute', bottom: 0, right: 0}}>
            <Icon name="edit" size={24} color="#282828" />
          </View>
        </View>
        <View style={styles.infor}>
          <View>
            <Text style={styles.nameChild}>{UserData.name}</Text>
            {/* <Text style={styles.idChild}>ID: {UserData.id}</Text> */}
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.information}>Informations</Text>
            <Text style={styles.information}>
              Phone: <Text style={GeneralStyle.text}>{UserData.phone}</Text>
            </Text>
            <Text style={styles.information}>
              Email: <Text style={GeneralStyle.text}>{UserData.email}</Text>
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.information}>Your Childs</Text>
            <ScrollView>
              <View
                style={{
                  height: 'auto',
                  maxHeight: 450,
                  paddingVertical: 10,
                }}>
                {UserData.kid.lenght !== 0 ? (
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
                          <View style={{display: 'flex'}}>
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
                            <Text style={styles.idChild}>ID: {item.id}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      fontFamily: FontFamily.Medium,
                    }}>
                    Your children list is empty ...
                  </Text>
                )}
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProfileRegister')}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../../../assets/images/add.png')}
                  />
                </TouchableOpacity>
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
    top: 10,
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
