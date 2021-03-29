import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const BoxScreen = () => {
  const { viewStyle, textOneStyle, textTwoStyle, textThreeStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textOneStyle}>Child #1</Text>
      <Text style={textTwoStyle}>Child #2</Text>
      <Text style={textThreeStyle}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;
