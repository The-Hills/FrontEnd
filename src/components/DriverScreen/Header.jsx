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
import AvatarandName from './Avatar';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';

const Header = () => {
  return (
    <View>
      <AvatarandName
        source={{
          uri: 'https://img2.cgtrader.com/items/4259561/e25cef6441/large/3d-avatar-profession-as-soldier-3d-model-e25cef6441.jpg',
        }}
        name="hoquoctri"
      />
      <View
        style={{
          backgroundColor: Colors.blue2,
          height: 85,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: 25,
        }}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../../../assets/images/vi2.png')}
        />
        <View>
          <Text style={styles.text}>VND</Text>
          <Text style={styles.text}>450.000</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontFamily: FontFamily.Bold,
    fontSize: 20,
    textAlign: 'right',
  },
});
