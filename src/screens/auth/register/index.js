// import React, {useState} from 'react';
// import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

// function Register() {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailValidError, setEmailValidError] = useState('');
//   const handleValidEmail = val => {
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
//     if (val.length === 0) {
//       setEmailValidError('email address must be enter');
//     } else if (reg.test(val) === false) {
//       setEmailValidError('enter valid email address');
//     } else if (reg.test(val) === true) {
//       setEmailValidError('');
//     }
//     };

//   return (
//     <View>
//       <Text size={30}>Full name</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={(name)=> setName(name)}  
//       />
//       <Text size={30}>Email</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType ='email-address'
//         onChangeText={email => {
//           setEmail(email);
//           handleValidEmail(email);
//         }}
//         value={email}
//       />
//       {emailValidError ? <Text>{emailValidError}</Text> : null}
//       <Text size={30}>Phone</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={phone}
//         onChangeText={(phone)=> setPhone(phone)}
        
//       />
//       <Text size={30}>Password</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={(password) => setPassword(password)}
//         value={password}
//       />
//       <TouchableOpacity >
//         <Text >Sign up</Text>
//       </TouchableOpacity>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     width: 330,
//     height: 30,
//     borderBottomWidth: 1,
//     padding: 10,
//     marginBottom: 20
//   }
// });

// export default Register;