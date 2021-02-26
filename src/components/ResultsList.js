import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        horizontal
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
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ResultsList;
