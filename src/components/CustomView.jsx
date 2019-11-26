import React from 'react';
import { StyleSheet, Text, Animated, Button } from 'react-native';

export default class CustomView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: new Animated.Value(0.2),
      expanded: false
    }
  }

  handleExpand = () => {
    if(this.state.expanded === false){
      Animated.timing(
        this.state.height,
        {
          toValue: 0.8
        }
      ).start();
      this.setState({
        expanded: true
      })
    } else {
      Animated.timing(
        this.state.height,
        {
          toValue: 0.2
        }
      ).start();
      this.setState({
        expanded: false
      })
    }
  }

  render() {
    return (
      <Animated.View style={styles.container}
        backgroundColor={this.props.back}
        flex={this.state.height}
      >
        <Text style={styles.text}>{this.props.text}</Text>
        <Button onPress={this.handleExpand} title={this.state.expanded ? 'collapse' : 'expand'}/>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    minHeight: 100,
    height: 'auto'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});