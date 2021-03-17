import React from 'react';
import { Text, View, Button, TouchableOpacity, Touchable } from 'react-native';
import { styles } from './styles';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        onPress={() => console.log('Button pressed')}
        title='Go to Components Demo'
      />
      <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
