import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import HistoryPage from './Components/HistoryPage';
import OrganizePage from './Components/OrganizedPage';
import EntryPage from './Components/EntryPage';
import ReadablePage from './Components/ReadablePage';
import Header from './Components/header';

export default function App() {

  const [text, setText] = useState('');
  const [key, setKey] = useState('');

  const [pos, setPos] = useState('OP');
  const [entries, setEntries] = useState([
    { text: 'entry 1', key: 'Sample Entry 1'},
    { text: 'entry 2', key: 'Sample Entry 2'},
    { text: 'entry 3', key: 'Sample Entry 3'}
  ]); //Add titles and timestamps later >> Timestamps can be added to the keys for added complexity

  const callbackFunction = (childData) => {
    setPos(childData)
  }

  const titleChangeHandler = (val) => {
    setKey(val);
  }
  const bodyChangeHandler = (val) => {
    setText(val);
  }
 
  const submitHandler = (text) => {
    setEntries((prevEntries) => {
      return [
        { text: text, key: key },
        ...prevEntries
      ];
    })
  }

  const entryPressHandler = () => {
    setPos('RP');
  }


  return (
    <View style={styles.MAIN}>
      <Header parentCallback={callbackFunction} style={styles.header}/>
      <View style={styles.container}>
        {
          {
            'OP': <OrganizePage />,
            'HP': <HistoryPage 
                    entryPressHandler={entryPressHandler} 
                    submitHandler={submitHandler} 
                    entry={entries} 
                  />,
            'EP': <EntryPage 
                    titleChangeHandler={titleChangeHandler}
                    bodyChangeHandler={bodyChangeHandler} 
                    submitHandler={submitHandler} 
                    text={text} 
                  />,
            'RP': <ReadablePage tempKey={key} tempText={text} />
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