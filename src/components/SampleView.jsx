import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class SampleView extends React.Component {
  static navigationOptions = {
    title: 'Pushed View',
  };

  render() {
    const { push, popToTop } = this.props.navigation;
    return (
      <View style={styles.main}>
        <Text style={styles.text}>This is a pushed view</Text>
        <Button
          title="Push sample view"
          onPress={() => push('Sample')}
        />
        <Button
          title="Reset"
          onPress={() => popToTop()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});