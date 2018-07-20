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

  componentDidMount() {
    this.getFromPhone();
  }

  setText = (value) => {
    this.setState({ text: value });
  }

  setInPhone = (tasks) => {
    AsyncStorage.setItem('@AppCourseUdemy:tasks', JSON.stringify(tasks))
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getFromPhone = () => {
    AsyncStorage.getItem('@AppCourseUdemy:tasks')
      .then((value) => {
        if (value !== null) {
          const courrentTaks = JSON.parse(value);
          this.setState({
            tasks: courrentTaks,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addTask = () => {
    const newTasks = [...this.state.tasks, { text: this.state.text, key: Date.now() }];
    this.setInPhone(newTasks);
    this.setState({
      tasks: newTasks,
      text: "",
    });
  }

  deleteTask = (id) => {
    const newTaks = this.state.tasks.filter((task) => {
      return task.key != id;
    });
    this.setInPhone(newTaks);
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
