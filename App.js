import React from 'react';
import { StyleSheet, Button, View, AsyncStorage } from 'react-native';
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

  setInPhone = () => {
    AsyncStorage.setItem('@AppCourseUdemy:nombre', 'jorge')
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getFromPhone = () => {
    AsyncStorage.getItem('@AppCourseUdemy:nombre')
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
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
        <Button
          title="Save"
          onPress={() => { this.setInPhone(); }}
        />
        <Button
          title="Recovery"
          onPress={() => { this.getFromPhone(); }}
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
