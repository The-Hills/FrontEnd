import React from 'react';
import {Width} from '../../../assets/ScreenDimensions';
import {Height} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/theme/fontSize';
import {FontFamily} from '../../../assets/theme/fontFamily';
const Input = ({
  password,
  onChangeText,
  lable,
  value,
  error,
  iconName,
  keyboardType,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.lable}>
        <Text style={styles.title}>{lable}</Text>
      </View>
      <View
        style={[
          styles.input,
          {
            borderBottomColor: error
              ? Colors.red
              : isFocused
              ? Colors.black
              : Colors.black,
          },
        ]}>
        <TextInput
          style={styles.textinput}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidePassword}
          placeholderTextColor="#777171"
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-off'}
            size={20}
            color="#232323"
          />
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: Width - 60,
    marginBottom: 20
  },
  lable: {},
  title: {
    color: Colors.black,
    fontSize: Sizes.text,
    fontFamily: FontFamily.Bold,
  },
  textinput: {
    width: '80%',
    fontSize: Sizes.text,
    fontFamily: FontFamily.Medium,
    color: Colors.gray,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  error: {
    fontFamily: FontFamily.Medium,
    color: Colors.red,
    fontSize: Sizes.small,
    marginTop: 5,
  },
});
