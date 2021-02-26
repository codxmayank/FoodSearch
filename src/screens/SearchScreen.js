import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, updateSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        onSearchSubmit={() => searchApi(searchTerm)}
      />
      <Text>You are searching for {searchTerm}</Text>
      {!errorMessage.length
        ? <Text>Found {results.length} results for {searchTerm}</Text>
        : <Text>{errorMessage}</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
