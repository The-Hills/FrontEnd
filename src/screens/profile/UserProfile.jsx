import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GeneralStyle } from '../../styles/generalStyles'
import { Colors } from '../../../assets/theme/colors'

const UserProfile = () => {
  return (
    <View style={GeneralStyle.container}>
      <Text style={[GeneralStyle.text, styles.text]}>UserProfile</Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});