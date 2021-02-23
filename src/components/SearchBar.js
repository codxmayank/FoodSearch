import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = props => {

  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        value={props.searchTerm}
        onChangeText={e => props.updateSearchTerm(e)}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={props.onSearchSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 5,
    backgroundColor: '#F0EEEE',
    height: 40,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 16
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 5
  }
});

export default SearchBar;
