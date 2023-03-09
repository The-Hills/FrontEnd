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
import {Height, Width} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import Header from '../../components/DriverScreen/Header';
import {FontFamily} from '../../../assets/theme/fontFamily';
import RequestItem from '../../components/DriverScreen/RequestItem';
import {Requests} from '../../../assets/data';

const DriverHomeScreen = ({navigation}) => {
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponentStyle={styles.HeaderStyle}
      ListHeaderComponent={() => (
        <View style={{backgroundColor: Colors.while, paddingTop: 20}}>
          <Header />
          <Text
            style={{
              color: Colors.black,
              fontFamily: FontFamily.SemiBold,
              fontSize: 20,
              marginTop: 10,
            }}>
            New request
          </Text>
        </View>
      )}
      stickyHeaderIndices={[0]}
      data={Requests}
      scrollEnabled={true}
      ItemSeparatorComponent={() => <View style={{height: 40}} />}
      contentContainerStyle={{paddingBottom: 30}}
      renderItem={({item, index}) => (
        <RequestItem
          avatar={item.avatar}
          name={item.name}
          key={index}
          onAccept={() =>
            navigation.navigate('MapScreenDriver', {item})
          }
        />
      )}
    />
  );
};

export default DriverHomeScreen;

const styles = StyleSheet.create({
  HeaderStyle: {
    width: '100%',
    // paddingTop:20
  },
  container: {
    backgroundColor: Colors.while,
    paddingHorizontal: 30,
    height: Height,
    width: Width,
    // paddingTop: 20,
    // paddingVertical: 20,
    // paddingBottom: 100,
  },
});
