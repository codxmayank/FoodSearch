import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>Results: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 6
  },
  text: {
    marginHorizontal: 6
  }
});

export default ResultsList;
