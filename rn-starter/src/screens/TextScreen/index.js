import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length > 5 ? null : (
        <Text>Password must be longer than 5 characters</Text>
      )}
    </View>
  );
};

export default TextScreen;
