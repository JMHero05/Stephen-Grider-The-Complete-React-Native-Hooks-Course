import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const TextScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

export default TextScreen;
