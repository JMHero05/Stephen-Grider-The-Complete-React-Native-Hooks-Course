import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Teresa' },
    { name: 'Jake' },
    { name: 'Mark' },
    { name: 'Glenda' },
    { name: 'Melinda' },
    { name: 'David' },
    { name: 'Tess' },
    { name: 'Ross' },
    { name: 'Matt' },
    { name: 'Olivia' },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text key={item.name}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default ListScreen;
