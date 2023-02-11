import {StyleSheet, Text, View} from 'react-native';
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';
import React, {useContext} from 'react';
import {AuthContext} from '../../hooks/auth/AuthContext';
import Button from '../../components/general/Button';
const UserHomeScreen = () => {
  const {userInfo, logout} = useContext(AuthContext);
  return (
    <View style={GeneralStyle.container}>
      <Text style={[GeneralStyle.text, styles.text]}>Hello</Text>
      <Button lable='LogOut' onPress={logout}/>
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});
