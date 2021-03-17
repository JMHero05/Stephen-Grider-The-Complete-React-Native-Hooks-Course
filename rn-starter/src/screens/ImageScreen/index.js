import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import ImageDetail from '../../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

export default ImageScreen;
