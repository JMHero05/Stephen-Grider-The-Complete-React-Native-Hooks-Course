import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const ImageDetail = ({ title, imgSource, imgScore }) => {
  return (
    <View style={styles.detail}>
      <Image source={imgSource} />
      <Text>{title}</Text>
      <Text>Image Score - {imgScore}</Text>
    </View>
  );
};

export default ImageDetail;
