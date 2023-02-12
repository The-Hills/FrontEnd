import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { Colors } from '../../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Feather';

const UploadFile = () => {
    const [photo, setPhoto] = React.useState(null);
    const [photoShow, setPhotoShow] = React.useState(null);

    const takePhotoAndUpload = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.cancelled) {
            return;
        }

        let localUri = result.uri;
        setPhotoShow(localUri);
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        let formData = new FormData();
        formData.append('photo', { uri: localUri, name: filename, type });

        await axios.post('http://localhost/api/file-upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(res => {
            setPhoto(res.data.photo.photo);
        }).catch(err => {
            console.log(err.response);
        });
    }

    const dicardImage = () => {
        setPhotoShow(null);
    }

    return (
        <View style={styles.mainBody}>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={takePhotoAndUpload}
            >
                <Icon name='file' size={20} color="#232323"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonStyle: {
        color: Colors.while,
        height: 60,
        marginLeft: '86.57%',
    },
});

export default UploadFile;