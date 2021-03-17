import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

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
    { name: 'Jeff' },
    { name: 'Isaac' },
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle} key={item.name}>
              {item.name}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;
