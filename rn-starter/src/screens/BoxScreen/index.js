import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const BoxScreen = () => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Child #1</Text>
      <Text style={textStyle}>Child #2</Text>
      <Text style={textStyle}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;
