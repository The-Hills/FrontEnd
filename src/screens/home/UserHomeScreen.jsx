import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GeneralStyle} from '../../styles/generalStyles';
import {Colors} from '../../../assets/theme/colors';
import Button from '../../components/general/Button';

const UserHomeScreen = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('Login');
  };
  return (
    <View style={GeneralStyle.container}>
      <Text style={[GeneralStyle.text, styles.text]}>
        Hello {userDetails?.fullname}
      </Text>
      <Button lable="Logout" onPress={logout} />
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});
