import GlobalStyles from '../GlobalStyles.js'

import React, { useState } from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';

export default function Header(props) {
  
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <SafeAreaView style={styles.header}> 
        <Button onPress={() => props.parentCallback('EP')} title='EP' />
        <Button onPress={() => props.parentCallback('HP')} title='HP' />
      </SafeAreaView>
    </SafeAreaView>

  );

}
  
const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'  
  }
});