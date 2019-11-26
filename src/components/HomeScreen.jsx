import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate, push } = this.props.navigation;
    return (
      <View>
        <Text style={styles.text}>this is home screen</Text>
        <Button
          title="Go to blocks"
          onPress={() => navigate('Blocks')}
        />
        <Button
          title="Go to sample view"
          onPress={() => push('Sample')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    marginBottom: 20
  }
});