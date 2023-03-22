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
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Colors} from '../../../assets/theme/colors';
import {Width} from '../../../assets/ScreenDimensions';

const ContentModal = ({source, title, style}) => {
  return (
    <View
      style={[
        {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        },
        style,
      ]}>
      <Image
        style={{
          width: Width / 2.18,
          height: Width / 2.18,
          position: 'absolute',
          left: -30,
          bottom: -50,
        }}
        source={source}
      />
      <Text
        style={{
          textAlign: 'center',
          paddingLeft: 50,
          color: '#144451',
          fontSize: 22,
          fontFamily: FontFamily.SemiBold,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default ContentModal;

const styles = StyleSheet.create({});
