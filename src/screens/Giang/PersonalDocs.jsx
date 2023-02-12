import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/theme/colors';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {Sizes} from '../../../assets/theme/fontSize';
import Button from '../../components/general/Button';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UploadFile from '../../components/general/UploadFile';

const PersonalDocs = ({navigation}) => {
    return (
    <KeyboardAwareScrollView extraScrollHeight={Height} enableOnAndroid>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Personal Documents</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.items}>
                    <Text style={styles.item}>Driving License</Text>
                    <Text style={styles.itemText}>A driving license is on official document</Text>
                    <UploadFile/>
                </View>
                <View style={styles.items}>
                    <Text style={styles.item}>VietNam ID Card</Text>
                    <Text style={styles.itemText}>A driving license is on official document</Text>
                    <UploadFile/>
                </View>
                <View style={styles.items}>
                    <Text style={styles.item}>Avatar</Text>
                    <Text style={styles.itemText}>A driving license is on official document</Text>
                    <UploadFile/>
                </View>
                <View style={styles.items}>
                    <Text style={styles.item}>Image vehicle</Text>
                    <Text style={styles.itemText}>A driving license is on official document</Text>
                    <UploadFile/>
                </View>
                <View
                    style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    top: '37%'
                    }}>
                    <Button lable="Next" onPress={() => navigation.navigate('Login')}/>
                </View>
            </View>
        </View>
    </KeyboardAwareScrollView>       
    )
}

export default PersonalDocs;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4BB7D6',
      height: Height,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        marginBottom: 30,
        fontFamily: FontFamily.Medium,
        fontSize: Sizes.title,
        color: Colors.while
    },
    content: {
        flex: 6,
        paddingHorizontal: 30,
        paddingTop: 10,
        width: Width,
        backgroundColor: Colors.while,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    items: {
        paddingVertical: 20,
    },
    item: {
        color: Colors.black,
        size: Sizes.title,
        fontFamily: FontFamily.Medium,
    },
    itemText: {
        fontFamily: FontFamily.Regular,
        size: 13
    }
});
  