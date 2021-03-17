import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import ImageDetail from '../../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='Forest' />
      <ImageDetail title='Mountain' />
      <ImageDetail title='Dungeon' />
      <ImageDetail title='Lake' />
      <ImageDetail title='Beach' />
    </View>
  );
};

export default ImageScreen;
