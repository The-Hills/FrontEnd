import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import { Colors } from './colors';

const StatusBarAr = ({bg}) => {
  return <StatusBar backgroundColor={bg} barStyle="dark-content" />;
};

export default StatusBarAr;

const styles = StyleSheet.create({});
