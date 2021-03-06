import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  return (
    <View>
      <Text>Results Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;
