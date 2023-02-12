import React from 'react';
import {Height, Width} from '../../../assets/ScreenDimensions';
import {FontFamily} from '../../../assets/theme/fontFamily';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Sizes} from '../../../assets/theme/fontSize';
import {Colors} from '../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View, Image } from 'react-native';
import Back from '../../components/general/Back';
import Avatar from '../../components/general/Avatar';
import Title from '../../components/auth/Title';
import Input from '../../components/general/Input';
import EditInput from '../../components/general/EditInput';

const DriverOfProfile = ({ navigation }) => {
    return (
    <KeyboardAwareScrollView extraScrollHeight={Height} enableOnAndroid>
        <View style={styles.container}>
            <View style={styles.header}>
                <Back/>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.avatar}>
                    <Avatar source={require('../../../assets/images/taxi-driver-man-6368692-52508391.png')} style={{ height: 111, width: 111}}/>
                </View>
                <View style={styles.infor}>
                    <Text style={styles.nameDriver}>Lionel Roanad</Text>
                    <Text style={styles.idDriver}>ID: ddsds5551221</Text>
                </View>
                <View style={styles.form}>
                    <Title 
                        text="Informations" 
                        size={18} 
                        style={{lineHeight: 24, fontFamily: FontFamily.Medium, marginLeft: 0 }}
                    >
                    </Title>
                    <EditInput lable="Phone" modify/>
                </View>
            </View>
        </View>
    </KeyboardAwareScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.while,
        height: Height,
      },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    title: {
        paddingHorizontal: 40,
        marginBottom: 60,
        fontFamily: FontFamily.Medium,
        fontSize: Sizes.title,
        color: Colors.main
    },
    content: {
        flex: 6,
        paddingHorizontal: 30,
        paddingTop: 10,
        width: Width,
        backgroundColor: Colors.while,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        lineHeight: 24
    },
    avatar: {
        position: 'absolute',
        height: 111,
        width: 111,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFCD3A',
    },
    infor:{
        top: 100,
    },
    nameDriver: {
        size: Sizes.title,
        fontFamily: FontFamily.Bold
    },
    idDriver: {
        size: Sizes.title
    },  
    img: {
        width: 65,
        height: 65,
        top: 50,
    },
    form: {
        top: 80,
        // left: '-25%'
    }
});

export default DriverOfProfile