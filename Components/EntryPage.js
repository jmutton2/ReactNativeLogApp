import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function EntryPage( { ChangeHandler, submitHandler, text }) {

  return (
    <View style={styles.container}>
        <TextInput 
          style={styles.title}
          placeholder='New entry...'
          onChangeText={ChangeHandler}
          numberOfLines={1}
        />
        <View style={styles.button}>
            <Button onPress={() => submitHandler(text)} title='add entry' />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    height: 780,
    margin: 20,
  },
  
  button: {
    height: 50,
    fontWeight: 'bold'
  },
  
  list: {
    height: 700
  },

  title: {
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10
  }
});