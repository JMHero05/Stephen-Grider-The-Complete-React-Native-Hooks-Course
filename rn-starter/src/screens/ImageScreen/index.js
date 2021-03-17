import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import ImageDetail from '../../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imgSrc={require('../../../assets/forest.jpg')}
      />
      <ImageDetail
        title='Beach'
        imgSrc={require('../../../assets/beach.jpg')}
      />
      <ImageDetail
        title='Mountain'
        imgSrc={require('../../../assets/mountain.jpg')}
      />
    </View>
  );
};

export default ImageScreen;
