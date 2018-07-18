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
      tasks: [...this.state.tasks, { text: this.state.text, key: Date.now() }],
      text: "",
    });
  }

  deleteTask = (id) => {
    const newTaks = this.state.tasks.filter((task) => {
      return task.key != id;
    });
    this.setState({
      tasks: newTaks,
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
        <Body tasks={this.state.tasks} delete={this.deleteTask} />
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
