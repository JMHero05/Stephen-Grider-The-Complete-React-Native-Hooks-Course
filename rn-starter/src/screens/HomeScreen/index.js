import React from 'react';
import { Text, View, Button, TouchableOpacity, Touchable } from 'react-native';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        onPress={() => navigate('Components')}
        title='Go to Components Demo'
      />
      <Button onPress={() => navigate('List')} title='Go to List Demo' />
      <Button onPress={() => navigate('Image')} title='Go to Image Demo' />
    </View>
  );
};

export default HomeScreen;
