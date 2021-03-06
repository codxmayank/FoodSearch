import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
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
  }

  useEffect(() => {
    searchApi('italian');
  }, []);

  return [searchApi, results, errorMessage];
}
