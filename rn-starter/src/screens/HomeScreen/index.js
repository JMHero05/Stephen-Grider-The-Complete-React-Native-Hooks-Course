import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        onPress={() => console.log('Button pressed')}
        title='Go to Components Demo'
      />
    </View>
  );
};

export default HomeScreen;
