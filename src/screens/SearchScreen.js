import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, updateSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    if (searchTerm.length) {
      try {
        const response = await yelp.get('/search', {
          params: {
            term: searchTerm,
            location: 'new delhi',
            limit: 50
          }
        });
        setResults(response.data.businesses);
        setErrorMessage('');
      } catch (err) {
        setResults([]);
        setErrorMessage('Something went wrong!');
      }
    } else {
      setResults([]);
      setErrorMessage('');
    }
  }
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        onSearchSubmit={searchApi}
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
