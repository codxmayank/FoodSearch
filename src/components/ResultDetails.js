import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.review}>{result.rating} Stars, {result.review_count} (Reviews)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 6,
    marginBottom: 2
  },
  review: {
  }
});

export default ResultDetails;
