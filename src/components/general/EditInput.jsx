import React from 'react';
import {Width} from '../../../assets/ScreenDimensions';
import {Height} from '../../../assets/ScreenDimensions';
import {Colors} from '../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/theme/fontSize';
import {FontFamily} from '../../../assets/theme/fontFamily';
const EditInput = ({
  modify,
  onChangeText,
  lable,
  value,
  error,
  iconName,
  keyboardType,
  onFocus = () => {},
  ...props
}) => {
  const [edit, setEdit] = React.useState(edit);
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
          placeholderTextColor="#777171"
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {modify && (
          <Icon
            onPress={() => setEdit(!edit)}
            name={edit ? 'edit' : 'eye-off'}
            size={20}
            color="#232323"
          />
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default EditInput;

const styles = StyleSheet.create({
  container: {
    width: Width - 60,
    marginBottom: 15,
  },
  lable: {},
  title: {
    color: Colors.black,
    fontSize: Sizes.text,
    fontFamily: FontFamily.Bold,
    lineHeight: 20,
  },
  textinput: {
    width: '80%',
    // height: 50,
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
    lineHeight: 15,
  },
});
