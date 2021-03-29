import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const BoxScreen = () => {
  const { viewStyle, viewOneStyle, viewTwoStyle, viewThreeStyle } = styles;
  return (
    <View style={viewStyle}>
      <View style={viewOneStyle} />
      <View style={viewTwoStyle} />
      <View style={viewThreeStyle} />
    </View>
  );
};

export default BoxScreen;
