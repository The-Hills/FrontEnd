import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/theme/colors';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';

const Loader2 = ({visible = false}) => {
  return (
    visible && (
      <View style={[styles.container, {width: Width, height:'100%'}]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.main} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: Sizes.text,
              fontFamily: FontFamily.Medium,
              color: Colors.black,
            }}>
            Loading...
          </Text>
        </View>
      </View>
    )
  );
};

export default Loader2;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  loader: {
    height: 70,
    backgroundColor: Colors.while,
    marginHorizontal: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
