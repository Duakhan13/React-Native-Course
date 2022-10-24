import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState();
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default SearchScreen;
