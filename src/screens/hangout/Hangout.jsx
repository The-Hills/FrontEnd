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
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';

const Hangout = () => {
  return (
    <View style={GeneralStyle.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../../../assets/images/mess.png')}
        />
        <Text
          style={{
            paddingTop: 30,
            color: Colors.black,
            fontFamily: FontFamily.SemiBold,
            fontSize: 25,
          }}>
          No Messages, yet.
        </Text>
      </View>
    </View>
  );
};

export default Hangout;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});
