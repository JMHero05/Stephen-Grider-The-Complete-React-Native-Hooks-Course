import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import ImageDetail from '../../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imgSource={require('../../../assets/forest.jpg')}
        imgScore={randomNum()}
      />
      <ImageDetail
        title='Beach'
        imgSource={require('../../../assets/beach.jpg')}
        imgScore={randomNum()}
      />
      <ImageDetail
        title='Mountain'
        imgSource={require('../../../assets/mountain.jpg')}
        imgScore={randomNum()}
      />
    </View>
  );
};

const randomNum = () => {
  return Math.floor(Math.random() * 10);
};

export default ImageScreen;
