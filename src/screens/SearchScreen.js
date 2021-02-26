import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

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
      <ResultsList title='Cost Effective' />
      <ResultsList title='Bit Pricier' />
      <ResultsList title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
