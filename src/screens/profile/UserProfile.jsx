import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';
import Button from '../../components/general/Button';
import {AuthContext, AuthProvider} from '../../hooks/auth/AuthContext';

const UserProfile = () => {
  const {userInfo, logout} = useContext(AuthContext);
  return (
    <View style={GeneralStyle.container}>
      <Text style={[GeneralStyle.text, styles.text]}>
        Hello {userInfo.fullname}
      </Text>
      <Button lable="LogOut" onPress={logout} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});
