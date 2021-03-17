import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = ({ title, imgSrc }) => {
  return (
    <View>
      <Image source={imgSrc} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;
