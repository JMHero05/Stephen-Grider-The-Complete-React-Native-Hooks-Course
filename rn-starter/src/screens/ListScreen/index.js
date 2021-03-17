import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

const ListScreen = () => {
  const friends = [
    { name: 'Teresa', age: 28 },
    { name: 'Jake', age: 34 },
    { name: 'Mark', age: 65 },
    { name: 'Glenda', age: 65 },
    { name: 'Melinda', age: 58 },
    { name: 'David', age: 57 },
    { name: 'Tess', age: 29 },
    { name: 'Ross', age: 30 },
    { name: 'Matt', age: 24 },
    { name: 'Olivia', age: 25 },
    { name: 'Jeff', age: 39 },
    { name: 'Isaac', age: 27 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          const { name, age } = item;

          return (
            <Text style={styles.textStyle} key={item.name}>
              {name} - Age: {age}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;
