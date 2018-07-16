import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  setText = (value) => {
    this.setState({ text: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header changeText={this.setText} />
        <Text> 
          { this.state.text } 
        </Text>
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
