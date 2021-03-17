import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/ComponentsScreenStyles';

const ComponentsScreen = () => {
  const string = <Text>This is the components screen as well</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      {string}
    </View>
  );
};

export default ComponentsScreen;
