import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      tasks: [],
    };
  }

  setText = (value) => {
    this.setState({ text: value });
  }

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, { text: this.state.text, key: Date.now }],
      text: "",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          text={this.state.text}
          changeText={this.setText} 
          add={this.addTask} 
        />
        <Text>
          { this.state.text } 
        </Text>
        <Body tasks={this.state.tasks}/>
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
