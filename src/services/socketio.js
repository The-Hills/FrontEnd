import {io} from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const socket = io('http://18.179.22.58:1234');

AsyncStorage.getItem('userId').then(id => {
  socket.on('connect', () => {
    socket.emit('user-connect', id);
    // console.log(socket.id);
  });
});

export default socket;
