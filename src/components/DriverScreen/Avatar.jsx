import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../general/Avatar';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
const AvatarandName = ({name, source}) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        height: 50,
        justifyContent: 'flex-start',
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: Colors.while,
          borderRadius: 90,
          borderWidth: 0.5,
        }}>
        <Avatar
          source={source}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View>
        <View
          style={{
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 5,
          }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: '#74D88F',
              borderRadius: 90,
            }}></View>
          <Text
            style={{
              color: '#777171',
              fontFamily: FontFamily.Regular,
              fontSize: 13,
            }}>
            Online
          </Text>
        </View>
        <Text
          style={{
            color: Colors.black,
            fontFamily: FontFamily.Medium,
            fontSize: 16,
          }}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default AvatarandName;

const styles = StyleSheet.create({
  container: {},
});
