import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, updateSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        onSearchSubmit={() => searchApi(searchTerm)}
      />
      {!errorMessage.length
        ? null
        : <Text style={styles.text}>{errorMessage}</Text>
      }
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' navigation={navigation} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  text: {
    marginHorizontal: 6
  }
});

export default SearchScreen;
