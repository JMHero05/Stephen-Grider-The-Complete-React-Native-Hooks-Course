import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const BoxScreen = () => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Box Screen</Text>
    </View>
  );
};

export default BoxScreen;
