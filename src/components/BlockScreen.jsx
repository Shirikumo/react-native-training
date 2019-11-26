import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomView from './CustomView'

export default class BlockScreen extends React.Component {
  static navigationOptions = {
    title: 'Blocks',
  };

  render() {
    return (
      <View style={styles.main}>
        <CustomView 
          style={styles.container}
          text="bonchour this is a custom view"
          back='orange'
        />
        <CustomView 
          style={styles.container}
          text="and hassan is a naranja boi"
          back='purple'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#999'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});