import {Image, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import React, { useRef } from 'react';
import StatusBarAr from '../../../assets/theme/StatusBar';
import {Colors} from '../../../assets/theme/colors';
import {GeneralStyle} from '../../styles/generalStyles';
import Avatar from '../../components/general/Avatar';
import {FontFamily} from '../../../assets/theme/fontFamily';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Height} from '../../../assets/ScreenDimensions';
import {Sizes} from '../../../assets/theme/fontSize';
import AvatarChilds from '../../components/general/AvatarChild';
import Input from '../../components/general/Input';
// import { TextInput } from 'react-native-gesture-handler';

const Profile = ({props}) => {

  const handleChange = () => {
    emailRef.current.focus();
  }

  const emailRef = useRef();

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
          {/* <Text style={styles.phone}>0862173072</Text> */}
          {/* <Input style={[styles.phone]} value="08752634294"></Input> */}
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"></TextInput>
          <Icon name="edit" color="black" size={30}></Icon>
        </View>
        <View style={styles.content} styles={{flex: 2, paddingTop: 30}}>
          <Text style={[Sizes.title, styles.titleName, Colors.black]}>
            Email :
          </Text>
          {/* <Text style={styles.email}>hothivu@gmail.com</Text> */}
          <TextInput
            ref={emailRef}
            style={[styles.input, styles.email]}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
            value='hothivu@gmail.com'></TextInput>
            
              <TouchableOpacity onPress={handleChange}>
              <Icon
              name="edit"
              color="black"
              size={30}

              
              style={{paddingRight: 0}}></Icon>
              </TouchableOpacity>
        </View>
        <Text style={styles.titleChilds}>Your childs</Text>
        <View style={styles.avatarChilds}>
          <AvatarChilds lable="ID 2859425">{}</AvatarChilds>
        </View>
        <View style={styles.plus}>
          <Image
            style={styles.pluss}
            source={require('../../../assets/images/Vector.png')}
          />
        </View>
      </View>
      {/* <Input value="hehee"/> */}
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
    paddingLeft: 10,
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
    paddingBottom: 20,
  },
  imgChild: {
    height: 80,
    right: 0,
    position: 'absolute',
  },
  avatarChilds: {
    bottom: 10,
  },
  plus: {
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    width: 80,
    height: 80,
    alignContent: 'center',
    alignItems: 'center',
  },
  pluss: {
    top: 30,
    width: 20,
    height: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ffff',
    flex: 2,
    fontSize: Sizes.text,
  },
});
export default Profile;
