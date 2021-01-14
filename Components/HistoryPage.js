import React from 'react';
import { 
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';

import EntryItem from 'C:/Users/Jacob/LogMobileApp/Components/EntryItem.js';

export default function HistoryPage({ entry, deleteHandler }) {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        LisHeaderComponent={
          <>
          </>
        }
          data={entry}
          renderItem={({ item }) => (
            <EntryItem deleteHandler={deleteHandler} item={ item } />
          )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    height: 780,
    margin: 20,
  }

});
