import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, updateSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

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
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
