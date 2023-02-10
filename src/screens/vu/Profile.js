import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {Colors} from '../../../assets/theme/colors';
// import Button from '../../components/general/Button';
// import {GeneralStyle} from '../../styles/generalStyles';
import StatusBarAr from '../../../assets/theme/StatusBar';
import {Colors} from '../../../assets/theme/colors';
import {GeneralStyle} from '../../styles/generalStyles';
import Avatar from '../../components/general/Avatar';
import {FontFamily} from '../../../assets/theme/fontFamily';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Height} from '../../../assets/ScreenDimensions';
import {Sizes} from '../../../assets/theme/fontSize';
import AvatarChilds from '../../components/general/AvatarChild';

const Profile = ({props}) => {
  return (
    <View style={[styles.container]}>
      <StatusBarAr bg={Colors.while} />
      <View style={{top: 50}}>
        <View style={styles.card}>
          <Avatar
            style={styles.img}
            source={require('../../../assets/images/Group49.png')}
          />
          <Text style={[styles.title]}>Lionel Ronado</Text>
          <Text style={[styles.text, GeneralStyle.text]}>ID: 11584669TL</Text>
        </View>
        <Text style={styles.titleName}>Informations</Text>
        <View style={styles.content}>
          <Text style={styles.titleName}>Phone : </Text>
          <Text style={styles.phone}>0862173072</Text>
          <Icon name="edit" color="black" size={30}></Icon>
        </View>
        <View style={styles.content} styles={{flex: 2, paddingTop: 30}}>
          <Text style={[Sizes.title, styles.titleName, Colors.black]}>
            Email :
          </Text>
          <Text style={styles.email}>hothivu@gmail.com</Text>
          <Icon
            name="edit"
            color="black"
            size={30}
            style={{paddingRight: 0}}></Icon>
        </View>
        <Text style={styles.titleChilds}>Your childs</Text>

        <View>
          <AvatarChilds lable="ID 2859425">{}</AvatarChilds>
        </View>
        <View style={styles.plus}>
          <Icon name="plus" style={styles.pluss}></Icon>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.while,
    height: Height,
    padding: 25,
  },
  img: {
    height: 100,
  },
  card: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  title: {
    fontSize: 18,
    fontFamily: FontFamily.Medium,
    color: Colors.black,
  },
  text: {
    paddingBottom: 10,
  },
  titleName: {
    fontSize: 18,
    fontFamily: FontFamily.Medium,
    color: Colors.black,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    flex: 2,
    padding: 10,
    color: Colors.black,
    fontSize: Sizes.text,
  },
  phone: {
    color: Colors.black,
    flex: 2,
    padding: 10,
    fontSize: Sizes.text,
  },
  titleChilds: {
    paddingTop: 20,
    fontSize: 18,
    fontFamily: FontFamily.Medium,
    color: Colors.black,
    paddingBottom:20,
  },
  imgChild: {
    height: 80,
    right: 0,
    position: 'absolute',
  },
  plus:{
    borderRadius:50,
    backgroundColor:'#D9D9D9',
    width:80,
    height:80,
    position:'relative',
  },
  pluss:{
    alignItems:'center',
    alignContent:'center',
    
  }
});
export default Profile;
