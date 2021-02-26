import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 1,
    borderColor: 'red',
    borderWidth: 1
  }
});

export default ResultDetails;
