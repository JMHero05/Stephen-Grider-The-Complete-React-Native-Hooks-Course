import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

const ComponentsScreen = () => {
  const name = 'Jake';

  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.secondary}>My name is {name}</Text>
    </View>
  );
};

export default ComponentsScreen;
