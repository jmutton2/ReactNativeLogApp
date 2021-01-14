import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import HistoryPage from './Components/HistoryPage';
import EntryPage from './Components/EntryPage';
import Header from './Components/header';

export default function App() {

  const RandomNumber = Math.floor(Math.random() * 100) + 1 ;

  const [text, setText] = useState('');

  const [pos, setPos] = useState('EP');
  const [entries, setEntries] = useState([
    { text: 'entry 1', key: 'Sample Entry 1'},
    { text: 'entry 2', key: 'Sample Entry 2'},
    { text: 'entry 3', key: 'Sample Entry 3'}
  ]); //Add titles and timestamps later >> Timestamps can be added to the keys for added complexity

  const callbackFunction = (childData) => {
    setPos(childData)
  }

  const ChangeHandler = (val) => {
    setText(val);
  }

  const submitHandler = (text) => {
    setEntries((prevEntries) => {
      return [
        { text: text, key: RandomNumber },
        ...prevEntries
      ];
    })
  }

  const deleteHandler = (key) => {
    setEntries((prevEntries) => {
      return prevEntries.filter(todo => todo.key != key);
    });
  }

  return (
    <View style={styles.MAIN}>
      <Header parentCallback={callbackFunction} style={styles.header}/>
      <View style={styles.container}>
        {
          {
            'HP': <HistoryPage 
                    submitHandler={submitHandler} 
                    entry={entries} 
                    deleteHandler={deleteHandler}
                  />,
            'EP': <EntryPage 
                    titleChangeHandler={ChangeHandler}
                    submitHandler={submitHandler} 
                    text={text} 
                  />
          }[pos]
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MAIN: {
    flex: 1
  },
  container: {
    flex: 1
  }
});