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
import {GeneralStyle} from '../../styles/generalStyles';
import Title from '../../components/auth/Title';

const EditAccount = ({ navigation }) => {
    return (
    <KeyboardAwareScrollView extraScrollHeight={Height} enableOnAndroid>
        <View style={styles.container}>
            <View style={styles.header}>
                <Back/>
                <Text style={styles.title}>Edit account</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.avatar}>
                    <Avatar source={require('../../../assets/images/Group77.png')} style={{ height: 72, width: 79}}/>
                    <Icon name='edit' size={17} color='#282828' style={{ paddingLeft: 75}}/>
                </View>
                <View style={styles.infor}>
                    <Text style={styles.nameChild}>Jimmy nguyen</Text>
                    <Text style={styles.idChild}>ID: 3255151</Text>
                </View>
                <View style={styles.img}>
                    <Image
                        style={styles.img}
                        source={require('../../../assets/images/image13.png')}
                    />
                </View>
                <View style={styles.detailInfor}>
                    <Title 
                        text="Informations" 
                        size={18} 
                        style={{lineHeight: 24, fontFamily: FontFamily.Medium, marginLeft: 0 }}
                    >
                    </Title>
                    <Text>Full name: Jimmy nguyen</Text>
                    <Text>Age: 8 years old</Text>
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
        marginBottom: 50,
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
        height: 109,
        width: 109,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },
    infor:{
        top: 100,
    },
    nameChild: {
        size: Sizes.title,
        fontFamily: FontFamily.Bold
    },
    idChild: {
        size: Sizes.title
    },  
    img: {
        width: 65,
        height: 65,
        top: 50,
    },
    detailInfor: {
        top: 80,
        left: '-25%'
    }
});

export default EditAccount